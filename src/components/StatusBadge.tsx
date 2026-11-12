import React from 'react';

interface StatusBadgeProps {
  status: string;
  world?: 'mars' | 'lunar';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, world = 'mars' }) => {
  const isMars = world === 'mars';

  return (
    <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase">
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          isMars ? 'bg-[#FF5722]' : 'bg-[#69D9FF]'
        }`}
      />
      <span className={isMars ? 'text-[#FF5722]' : 'text-[#69D9FF]'}>
        {status}
      </span>
    </div>
  );
};
