import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#A7B2C5]">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            {index > 0 && <span className="text-[#26344A]">/</span>}
            {item.path && !isLast ? (
              <Link
                to={item.path}
                className="hover:text-[#69D9FF] transition-colors whitespace-nowrap uppercase"
              >
                {item.label}
              </Link>
            ) : (
              <span className={`whitespace-nowrap uppercase ${isLast ? 'text-[#F4F6FA] font-semibold' : ''}`}>
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
