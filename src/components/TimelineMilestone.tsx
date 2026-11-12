import React from 'react';
import { Milestone } from '../types';

interface TimelineMilestoneProps {
  milestones: Milestone[];
  world?: 'mars' | 'lunar';
}

export const TimelineMilestones: React.FC<TimelineMilestoneProps> = ({ milestones, world = 'mars' }) => {
  const isMars = world === 'mars';
  const accentBorder = isMars ? 'border-[#FF5722]' : 'border-[#69D9FF]';
  const accentText = isMars ? 'text-[#FF5722]' : 'text-[#69D9FF]';
  const dotColor = isMars ? 'bg-[#FF5722]' : 'bg-[#69D9FF]';

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-[#26344A] pb-3">
        <h3 className="text-lg font-bold tracking-wide text-[#F4F6FA] font-display">
          HISTORICAL MISSION CHRONOLOGY
        </h3>
        <span className="text-xs font-mono text-[#A7B2C5]">
          04 VERIFIED MILESTONES
        </span>
      </div>

      <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2 sm:before:left-3 before:top-3 before:bottom-3 before:w-[2px] before:bg-[#26344A]">
        {milestones.map((milestone, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline node */}
            <div
              className={`absolute -left-6 sm:-left-8 top-1.5 h-4 w-4 rounded-full border-2 border-[#060814] ${dotColor} ring-4 ring-[#101827] group-hover:scale-125 transition-transform`}
            />

            <div className="bg-[#101827]/80 border border-[#26344A] p-5 rounded-sm hover:border-[#A7B2C5]/40 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className={`text-xs font-mono font-bold tracking-wider uppercase ${accentText}`}>
                  STAGE 0{idx + 1} · {milestone.date}
                </span>
                <span className="text-xs font-mono text-[#A7B2C5]">
                  {milestone.year}
                </span>
              </div>

              <h4 className="text-base font-semibold text-[#F4F6FA] mb-2 font-display">
                {milestone.title}
              </h4>

              <p className="text-sm text-[#A7B2C5] leading-relaxed mb-3">
                {milestone.description}
              </p>

              <div className="pt-3 border-t border-[#26344A]/60 flex items-start gap-2 text-xs">
                <span className="text-[#A7B2C5] font-mono shrink-0">HISTORICAL SIGNIFICANCE:</span>
                <span className="text-[#F4F6FA] font-medium">{milestone.significance}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
