import React from 'react';
import { QuickStat } from '../types';

interface QuickStatsProps {
  stats: QuickStat[];
  world?: 'mars' | 'lunar';
}

export const QuickStats: React.FC<QuickStatsProps> = ({ stats, world = 'mars' }) => {
  const accentColor = world === 'mars' ? 'text-[#FF5722]' : 'text-[#69D9FF]';
  const borderColor = world === 'mars' ? 'border-[#26344A]' : 'border-[#26344A]';

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className={`flex flex-col justify-between p-4 bg-[#101827]/70 border ${borderColor} rounded-sm transition-colors hover:border-[#69D9FF]/40`}
        >
          <span className="text-[11px] font-mono tracking-wider uppercase text-[#A7B2C5]">
            {stat.label}
          </span>
          <div className="mt-2">
            <div className={`text-xl sm:text-2xl font-bold font-mono tabular-nums ${accentColor}`}>
              {stat.value}
            </div>
            {stat.subtext && (
              <div className="text-xs text-[#A7B2C5]/80 mt-1">
                {stat.subtext}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
