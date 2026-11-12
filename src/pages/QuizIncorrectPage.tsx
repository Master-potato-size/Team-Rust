import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, RotateCcw, Lightbulb, ArrowLeft } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { soundManager } from '../utils/audio';

export const QuizIncorrectPage: React.FC = () => {
  useEffect(() => {
    soundManager.playError();
  }, []);

  return (
    <div className="min-h-screen bg-[#060814] text-[#F4F6FA] py-12 px-4 sm:px-6 lg:px-8 bg-starfield flex flex-col justify-center">
      <div className="max-w-2xl mx-auto w-full space-y-10 text-center">
        
        {/* Navigation Breadcrumb */}
        <div className="flex justify-start">
          <Breadcrumb
            items={[
              { label: 'GHOSTS OF THE VOID', path: '/' },
              { label: 'KNOWLEDGE CHECK', path: '/quiz' },
              { label: 'RETRY' }
            ]}
          />
        </div>

        {/* Warning Icon */}
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#FF5722]/15 text-[#FF5722] border border-[#FF5722]/30">
          <AlertCircle className="h-10 w-10" />
        </div>

        <div className="space-y-3">
          <div className="text-xs font-mono tracking-widest text-[#FF5722] uppercase font-bold">
            ARCHAEOLOGICAL INCONSISTENCY DETECTED
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F4F6FA] font-display">
            NOT QUITE, SPACE EXPLORER!
          </h1>

          <p className="text-base text-[#A7B2C5] max-w-md mx-auto leading-relaxed">
            The telemetry and planetary samples returned by Spirit do not support that hypothesis. Mars history requires precise empirical deduction.
          </p>
        </div>

        {/* Mandatory Hint Callout */}
        <div className="p-6 rounded-sm border border-[#FFC857]/40 bg-[#101827] text-left space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-[#FFC857] font-bold uppercase tracking-wider">
            <Lightbulb className="h-4 w-4" />
            <span>ARCHAEOLOGICAL HINT</span>
          </div>

          <p className="text-base text-[#F4F6FA] font-semibold">
            HINT: THINK ABOUT WATER AND ANCIENT MARTIAN ENVIRONMENTS.
          </p>

          <p className="text-xs text-[#A7B2C5] leading-relaxed">
            Remember how Spirit dragged its broken right front wheel through the soil at Home Plate, churning up bright white silica deposits commonly formed by hot hydrothermal springs.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to="/quiz"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-[#FF5722] hover:bg-[#FF5722]/90 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-xs transition-all shadow-lg shadow-[#FF5722]/20"
          >
            <RotateCcw className="h-4 w-4" />
            <span>TRY AGAIN</span>
          </Link>

          <Link
            to="/relic/spirit-rover"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-4 border border-[#26344A] bg-[#101827] text-[#A7B2C5] hover:text-[#F4F6FA] hover:border-[#A7B2C5] text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-xs transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>REVIEW SPIRIT ROVER DOSSIER</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
