import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HelpCircle, ArrowRight, ShieldAlert, Cpu, Sparkles, Orbit } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';

interface QuizOption {
  id: 'A' | 'B' | 'C';
  label: string;
  isCorrect: boolean;
}

export const QuizPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | 'C' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const options: QuizOption[] = [
    {
      id: 'A',
      label: 'Evidence of ancient forests covering the planet.',
      isCorrect: false
    },
    {
      id: 'B',
      label: 'Strong evidence that Mars was once much wetter than it is today.',
      isCorrect: true
    },
    {
      id: 'C',
      label: 'Proof that humans once lived on Mars.',
      isCorrect: false
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedOption || isSubmitting) return;

    setIsSubmitting(true);
    const chosen = options.find((o) => o.id === selectedOption);

    // Route based on answer
    setTimeout(() => {
      if (chosen?.isCorrect) {
        navigate('/quiz/correct');
      } else {
        navigate('/quiz/incorrect');
      }
    }, 250);
  };

  return (
    <div className="min-h-screen bg-[#060814] text-[#F4F6FA] py-12 px-4 sm:px-6 lg:px-8 bg-starfield">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Navigation Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'GHOSTS OF THE VOID', path: '/' },
            { label: 'COMMAND HUB', path: '/destinations' },
            { label: 'KNOWLEDGE CHECK' }
          ]}
        />

        {/* Terminal Header */}
        <div className="space-y-4 border-b border-[#26344A] pb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#FFC857] uppercase">
            <HelpCircle className="h-4 w-4" />
            <span>TERMINAL 01 — KNOWLEDGE CHECK</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F4F6FA] font-display text-balance">
            WHAT DID SPIRIT ROVER HELP SCIENTISTS UNCOVER ABOUT MARS?
          </h1>

          <p className="text-sm sm:text-base text-[#A7B2C5]">
            Evaluate the archival evidence gathered during Spirit's six-year trek across Gusev Crater and select the verified scientific conclusion.
          </p>
        </div>

        {/* Interactive Answer Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            {options.map((option) => {
              const isSelected = selectedOption === option.id;
              return (
                <div
                  key={option.id}
                  onClick={() => setSelectedOption(option.id)}
                  className={`p-6 rounded-sm border cursor-pointer transition-all flex items-start gap-4 select-none ${
                    isSelected
                      ? 'border-[#69D9FF] bg-[#69D9FF]/10 shadow-lg shadow-[#69D9FF]/10 ring-1 ring-[#69D9FF]'
                      : 'border-[#26344A] bg-[#101827]/70 hover:border-[#A7B2C5] hover:bg-[#101827]'
                  }`}
                >
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-xs font-mono font-bold text-sm shrink-0 border transition-colors ${
                      isSelected
                        ? 'border-[#69D9FF] bg-[#69D9FF] text-[#060814]'
                        : 'border-[#26344A] bg-[#060814] text-[#A7B2C5]'
                    }`}
                  >
                    {option.id}
                  </div>

                  <div className="flex-1 pt-1">
                    <span className="text-base sm:text-lg text-[#F4F6FA] font-medium leading-relaxed block">
                      {option.label}
                    </span>
                    <span className="text-[11px] font-mono text-[#A7B2C5]/70 block mt-1">
                      {isSelected ? 'OPTION SELECTED · READY TO VERIFY' : 'CLICK TO SELECT THIS HYPOTHESIS'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Submission CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
            <span className="text-xs font-mono text-[#A7B2C5]">
              {selectedOption ? 'HYPOTHESIS LOCKED IN' : 'SELECT AN ANSWER CARD ABOVE TO PROCEED'}
            </span>

            <button
              type="submit"
              disabled={!selectedOption || isSubmitting}
              className={`flex items-center justify-center gap-2 px-8 py-4 font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-xs transition-all w-full sm:w-auto ${
                selectedOption && !isSubmitting
                  ? 'bg-[#FF5722] hover:bg-[#FF5722]/90 text-white cursor-pointer shadow-lg shadow-[#FF5722]/20'
                  : 'bg-[#101827] text-[#A7B2C5]/40 border border-[#26344A] cursor-not-allowed'
              }`}
            >
              <span>{isSubmitting ? 'VERIFYING WITH NASA ARCHIVE...' : 'SUBMIT ARCHAEOLOGICAL HYPOTHESIS'}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>

        {/* Educational Information Cards */}
        <div className="pt-12 border-t border-[#26344A] space-y-6">
          <div className="flex items-center gap-2">
            <Orbit className="h-4 w-4 text-[#69D9FF]" />
            <h3 className="text-xs font-mono tracking-wider uppercase text-[#F4F6FA] font-bold">
              WHY DO MACHINES REMAIN ON EXTRATERRESTRIAL SURFACES?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-[#101827]/50 border border-[#26344A] rounded-sm space-y-2">
              <div className="text-xs font-mono text-[#FF5722] font-semibold uppercase">
                01 · THE PHYSICS OF RETURN VELOCITY
              </div>
              <h4 className="text-sm font-bold text-[#F4F6FA] font-display">
                Rocket Equation Realities
              </h4>
              <p className="text-xs text-[#A7B2C5] leading-relaxed">
                Escaping Mars or Moon gravity requires enormous propellant mass. To return a rover to Earth, a massive multi-stage rocket would have to be brought along, vastly multiplying launch weight beyond what current launch vehicles can support.
              </p>
            </div>

            <div className="p-5 bg-[#101827]/50 border border-[#26344A] rounded-sm space-y-2">
              <div className="text-xs font-mono text-[#69D9FF] font-semibold uppercase">
                02 · EXTENDED LIFE AS SCIENCE MONUMENTS
              </div>
              <h4 className="text-sm font-bold text-[#F4F6FA] font-display">
                Off-World Time Capsules
              </h4>
              <p className="text-xs text-[#A7B2C5] leading-relaxed">
                Hardware left behind continues to serve science: the Apollo 11 retroreflector is still bounced with Earth lasers, while rovers stand as pristine archaeological benchmarks for how human engineering survives vacuum and radiation over centuries.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
