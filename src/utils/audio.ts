/**
 * Web Audio API synthesizer for Ghosts of the Void space interface sounds.
 * Generates both tactile space-terminal acoustic feedback and a continuous procedural
 * cosmic ambient drone with zero external assets or network dependencies.
 */

type AudioStateListener = (state: { isMuted: boolean; volume: number }) => void;

class SoundSystem {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = true;
  private volume: number = 0.6;
  private listeners: Set<AudioStateListener> = new Set();

  // Ambient Drone Web Audio Nodes
  private masterGain: GainNode | null = null;
  private ambientGain: GainNode | null = null;
  private droneOsc1: OscillatorNode | null = null;
  private droneOsc2: OscillatorNode | null = null;
  private droneOsc3: OscillatorNode | null = null;
  private lfo: OscillatorNode | null = null;
  private filter: BiquadFilterNode | null = null;
  private isAmbientRunning: boolean = false;

  constructor() {
    // Read persisted audio preferences; default to muted
    if (typeof window !== 'undefined') {
      try {
        const savedMuted = localStorage.getItem('ghosts_void_audio_muted');
        this.isMuted = savedMuted === null ? true : savedMuted === 'true';

        const savedVol = localStorage.getItem('ghosts_void_audio_volume');
        if (savedVol !== null) {
          const parsedVol = parseFloat(savedVol);
          if (!isNaN(parsedVol) && parsedVol >= 0 && parsedVol <= 1) {
            this.volume = parsedVol;
          }
        }
      } catch {
        this.isMuted = true;
        this.volume = 0.6;
      }
    }
  }

  private notify() {
    const state = { isMuted: this.isMuted, volume: this.volume };
    this.listeners.forEach((listener) => {
      try {
        listener(state);
      } catch (err) {
        console.error('Audio listener error:', err);
      }
    });
  }

  public subscribe(listener: AudioStateListener): () => void {
    this.listeners.add(listener);
    // Immediately emit current state
    listener({ isMuted: this.isMuted, volume: this.volume });
    return () => {
      this.listeners.delete(listener);
    };
  }

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
    }

    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  public toggleMute(): boolean {
    return this.setMuted(!this.isMuted);
  }

  public setMuted(muted: boolean): boolean {
    this.isMuted = muted;
    try {
      localStorage.setItem('ghosts_void_audio_muted', String(this.isMuted));
    } catch {}

    this.initContext();

    if (this.ctx && this.masterGain) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.setTargetAtTime(this.isMuted ? 0 : this.volume, now, 0.05);
    }

    if (!this.isMuted) {
      this.startAmbient();
      this.playClick();
    } else {
      this.stopAmbient();
    }

    this.notify();
    return this.isMuted;
  }

  public setVolume(vol: number) {
    const clamped = Math.max(0, Math.min(1, vol));
    this.volume = clamped;
    try {
      localStorage.setItem('ghosts_void_audio_volume', String(clamped));
    } catch {}

    if (this.ctx && this.masterGain && !this.isMuted) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.setTargetAtTime(this.volume, now, 0.03);
    }

    this.notify();
  }

  public getVolume(): number {
    return this.volume;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  /**
   * Procedural Ambient Space Drone (Web Audio API)
   * Multi-oscillator harmonic chord with LFO-modulated lowpass filter
   */
  public startAmbient() {
    if (this.isMuted || this.isAmbientRunning) return;
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;

      const now = this.ctx.currentTime;

      // Ambient sub-gain
      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.setValueAtTime(0.001, now);
      // Gentle 2-second celestial fade-in
      this.ambientGain.gain.exponentialRampToValueAtTime(0.25, now + 2.0);

      // Lowpass resonant filter simulating deep space void acoustics
      this.filter = this.ctx.createBiquadFilter();
      this.filter.type = 'lowpass';
      this.filter.frequency.setValueAtTime(160, now);
      this.filter.Q.setValueAtTime(3.5, now);

      // LFO for slow atmospheric breathing (0.08 Hz)
      this.lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      this.lfo.frequency.setValueAtTime(0.08, now);
      lfoGain.gain.setValueAtTime(80, now); // Modulate filter cutoff between 80Hz and 240Hz
      this.lfo.connect(lfoGain);
      lfoGain.connect(this.filter.frequency);

      // Oscillator 1: Root fundamental 55Hz (A1)
      this.droneOsc1 = this.ctx.createOscillator();
      this.droneOsc1.type = 'sine';
      this.droneOsc1.frequency.setValueAtTime(55.0, now);

      // Oscillator 2: Perfect fifth 82.4Hz (E2)
      this.droneOsc2 = this.ctx.createOscillator();
      this.droneOsc2.type = 'triangle';
      this.droneOsc2.frequency.setValueAtTime(82.41, now);

      // Oscillator 3: Sub-bass 27.5Hz (A0)
      this.droneOsc3 = this.ctx.createOscillator();
      this.droneOsc3.type = 'sine';
      this.droneOsc3.frequency.setValueAtTime(27.5, now);

      // Connect drone oscillators to filter -> ambientGain -> masterGain
      this.droneOsc1.connect(this.filter);
      this.droneOsc2.connect(this.filter);
      this.droneOsc3.connect(this.filter);

      this.filter.connect(this.ambientGain);
      this.ambientGain.connect(this.masterGain);

      this.lfo.start(now);
      this.droneOsc1.start(now);
      this.droneOsc2.start(now);
      this.droneOsc3.start(now);

      this.isAmbientRunning = true;
    } catch {
      this.isAmbientRunning = false;
    }
  }

  public stopAmbient() {
    if (!this.isAmbientRunning || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      if (this.ambientGain) {
        this.ambientGain.gain.cancelScheduledValues(now);
        this.ambientGain.gain.setValueAtTime(this.ambientGain.gain.value, now);
        this.ambientGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);
      }

      setTimeout(() => {
        try {
          this.droneOsc1?.stop();
          this.droneOsc2?.stop();
          this.droneOsc3?.stop();
          this.lfo?.stop();
          this.droneOsc1?.disconnect();
          this.droneOsc2?.disconnect();
          this.droneOsc3?.disconnect();
          this.lfo?.disconnect();
          this.filter?.disconnect();
          this.ambientGain?.disconnect();
        } catch {}
        this.droneOsc1 = null;
        this.droneOsc2 = null;
        this.droneOsc3 = null;
        this.lfo = null;
        this.filter = null;
        this.ambientGain = null;
        this.isAmbientRunning = false;
      }, 850);
    } catch {
      this.isAmbientRunning = false;
    }
  }

  /**
   * Primary Button Click: Crisp, calibrated mechanical space-terminal click
   */
  public playClick() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(1400, now);
      osc.frequency.exponentialRampToValueAtTime(450, now + 0.04);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.045);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.05);
    } catch (e) {}
  }

  /**
   * Navigation / Sector Switch: Subtle resonant frequency blip
   */
  public playNav() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(1320, now + 0.06);

      gain.gain.setValueAtTime(0.14, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.08);
    } catch (e) {}
  }

  /**
   * Mission Complete / Confirmation: Two-tone affirmative telemetry chime
   */
  public playConfirm() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;

      const now = this.ctx.currentTime;

      // Tone 1
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(587.33, now); // D5
      gain1.gain.setValueAtTime(0.16, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc1.connect(gain1);
      gain1.connect(this.masterGain);
      osc1.start(now);
      osc1.stop(now + 0.13);

      // Tone 2
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(880, now + 0.08); // A5
      gain2.gain.setValueAtTime(0.18, now + 0.08);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
      osc2.connect(gain2);
      gain2.connect(this.masterGain);
      osc2.start(now + 0.08);
      osc2.stop(now + 0.3);
    } catch (e) {}
  }

  /**
   * Achievement Unlocked: Celestial harmonic arpeggio
   */
  public playSuccess() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;

      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6

      notes.forEach((freq, idx) => {
        if (!this.ctx || !this.masterGain) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        const startTime = now + idx * 0.07;
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.16, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(startTime);
        osc.stop(startTime + 0.36);
      });
    } catch (e) {}
  }

  /**
   * Error / Warning tone
   */
  public playError() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.linearRampToValueAtTime(140, now + 0.18);

      gain.gain.setValueAtTime(0.14, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.22);
    } catch (e) {}
  }
}

export const soundManager = new SoundSystem();
