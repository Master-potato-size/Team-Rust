import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Award, ArrowRight, Droplets, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useExploration } from '../context/ExplorationContext';
import { Breadcrumb } from '../components/Breadcrumb';
import { soundManager } from '../utils/audio';

export const QuizCorrectPage: React.FC = () => {
  const { completeQuiz, waterDetectiveUnlocked } = useExploration();

  useEffect(() => {
    // Unlock achievement immediately and play triumphant celestial chime
    completeQuiz();
    soundManager.playSuccess();

    // Trigger subtle celebratory confetti
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#45D483', '#69D9FF', '#FFC857', '#F4F6FA']
      });
    } catch {
      // safe fallback if canvas is unavailable
    }
  }, [completeQuiz]);

  return (
    <div className="min-h-screen bg-[#060814] text-[#F4F6FA] py-12 px-4 sm:px-6 lg:px-8 bg-starfield flex flex-col justify-center">
      <div className="max-w-3xl mx-auto w-full space-y-10">
        
        {/* Navigation Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'GHOSTS OF THE VOID', path: '/' },
            { label: 'KNOWLEDGE CHECK', path: '/quiz' },
            { label: 'VERIFIED' }
          ]}
        />

        {/* Success Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#45D483]/15 text-[#45D483] border border-[#45D483]/30 mb-2">
            <CheckCircle2 className="h-10 w-10" />
          </div>

          <div className="text-xs font-mono tracking-widest text-[#45D483] uppercase font-bold">
            HYPOTHESIS EMPIRICALLY CONFIRMED
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F4F6FA] font-display">
            EXCELLENT WORK, SPACE EXPLORER!
          </h1>

          <p className="text-base sm:text-lg text-[#A7B2C5] max-w-xl mx-auto leading-relaxed">
            You accurately identified Spirit Rover's landmark geological findings. Ancient Mars harbored active hydrothermal springs and liquid water.
          </p>
        </div>

        {/* Achievement Card */}
        <div className="p-8 rounded-sm border-2 border-[#45D483] bg-[#101827] shadow-xl shadow-[#45D483]/10 relative overflow-hidden">
          {/* Subtle glow accent */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#45D483]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            <div className="p-4 rounded-xs bg-[#45D483]/20 border border-[#45D483] text-[#45D483] shrink-0">
              <Droplets className="h-8 w-8" />
            </div>

            <div className="space-y-2 flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="text-xs font-mono font-bold tracking-widest text-[#45D483] uppercase">
                  ACHIEVEMENT UNLOCKED
                </span>
                <span className="text-xs font-mono text-[#A7B2C5]">·</span>
                <span className="text-xs font-mono text-[#F4F6FA]">GRADE I HONORS</span>
              </div>

              <h3 className="text-2xl font-bold font-display text-[#F4F6FA]">
                WATER DETECTIVE
              </h3>

              <p className="text-sm text-[#A7B2C5] leading-relaxed">
                Awarded for analyzing Spirit's serendipitous silica trench discovery at Home Plate and validating that ancient Mars was once dynamic, wet, and potentially habitable.
              </p>
            </div>
          </div>
        </div>

        {/* Claim Reward CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to="/mission-log"
            className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-[#45D483] hover:bg-[#45D483]/90 text-[#060814] font-bold text-xs sm:text-sm tracking-wider uppercase rounded-xs transition-all shadow-lg shadow-[#45D483]/20"
          >
            <span>CLAIM MY REWARD</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            to="/archive/mars"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-4 border border-[#26344A] bg-[#101827] text-[#A7B2C5] hover:text-[#F4F6FA] hover:border-[#A7B2C5] text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-xs transition-colors"
          >
            <span>CONTINUE EXPLORING</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
