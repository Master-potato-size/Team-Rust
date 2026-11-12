import { useEffect } from 'react';
import { soundManager } from '../utils/audio';

/**
 * SoundEffects component sets up a global event listener that captures clicks
 * on any button, anchor link, input control, or interactive element across the entire app
 * and synthesizes an immediate tactile space-terminal click sound.
 */
export const SoundEffects: React.FC = () => {
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Detect any button, link, role="button", or interactive control
      const isInteractive = target.closest(
        'button, a, input[type="button"], input[type="submit"], [role="button"], label, select'
      );

      if (isInteractive) {
        soundManager.playClick();
      }
    };

    // Use capturing phase so all child clicks immediately trigger the feedback
    document.addEventListener('click', handleGlobalClick, { capture: true, passive: true });

    return () => {
      document.removeEventListener('click', handleGlobalClick, { capture: true });
    };
  }, []);

  return null;
};
