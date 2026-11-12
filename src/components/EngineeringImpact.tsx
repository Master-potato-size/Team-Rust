import React from 'react';
import { Cpu, Wrench } from 'lucide-react';

interface EngineeringImpactProps {
  title: string;
  description: string;
  technicalHighlights: string[];
  world?: 'mars' | 'lunar';
}

export const EngineeringImpact: React.FC<EngineeringImpactProps> = ({
  title,
  description,
  technicalHighlights,
  world = 'mars'
}) => {
  const isMars = world === 'mars';
  const accentText = isMars ? 'text-[#FF5722]' : 'text-[#69D9FF]';

  return (
    <div className="bg-[#101827]/70 border border-[#26344A] p-6 sm:p-8 rounded-sm space-y-6">
      <div className="flex items-center gap-3 border-b border-[#26344A] pb-4">
        <div className={`p-2 rounded-xs bg-[#060814] border border-[#26344A] ${accentText}`}>
          <Cpu className="h-5 w-5" />
        </div>
        <div>
          <span className="text-[11px] font-mono tracking-wider uppercase text-[#A7B2C5]">
            ENGINEERING & SCIENTIFIC IMPACT
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-[#F4F6FA] font-display">
            {title}
          </h3>
        </div>
      </div>

      <p className="text-sm sm:text-base text-[#A7B2C5] leading-relaxed">
        {description}
      </p>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#F4F6FA]">
          <Wrench className="h-3.5 w-3.5 text-[#A7B2C5]" />
          <span>Technical Breakthroughs & Instrumentation</span>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#A7B2C5]">
          {technicalHighlights.map((highlight, idx) => (
            <li key={idx} className="flex items-start gap-2 bg-[#060814]/60 p-3 rounded-xs border border-[#26344A]/60">
              <span className={`font-mono text-xs ${accentText} shrink-0`}>▸</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
