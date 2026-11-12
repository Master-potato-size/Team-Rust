import React from 'react';
import { Lightbulb, CheckCircle2 } from 'lucide-react';

interface DiscoveryPanelProps {
  question: string;
  answer: string;
  bulletPoints: string[];
  world?: 'mars' | 'lunar';
}

export const DiscoveryPanel: React.FC<DiscoveryPanelProps> = ({
  question,
  answer,
  bulletPoints,
  world = 'mars'
}) => {
  const isMars = world === 'mars';
  const accentBorder = isMars ? 'border-[#FF5722]/50' : 'border-[#69D9FF]/50';
  const glowBg = isMars ? 'bg-[#FF5722]/5' : 'bg-[#69D9FF]/5';
  const accentText = isMars ? 'text-[#FF5722]' : 'text-[#69D9FF]';

  return (
    <div className={`p-6 sm:p-8 rounded-sm border ${accentBorder} ${glowBg} relative overflow-hidden`}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2 rounded-xs bg-[#101827] border border-[#26344A] ${accentText}`}>
          <Lightbulb className="h-5 w-5" />
        </div>
        <div>
          <span className="text-[11px] font-mono tracking-wider uppercase text-[#A7B2C5]">
            SPACE ARCHAEOLOGY INSIGHT
          </span>
          <h3 className="text-xl font-bold tracking-tight text-[#F4F6FA] font-display">
            {question}
          </h3>
        </div>
      </div>

      <p className="text-base text-[#F4F6FA] leading-relaxed mb-6 font-medium">
        {answer}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[#26344A]/60">
        {bulletPoints.map((point, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <CheckCircle2 className={`h-4 w-4 mt-0.5 shrink-0 ${accentText}`} />
            <p className="text-sm text-[#A7B2C5] leading-relaxed">
              {point}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
