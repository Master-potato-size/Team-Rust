import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-[#26344A] bg-[#060814] text-[#A7B2C5] text-xs font-sans">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand & Purpose */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold tracking-widest text-[#F4F6FA] font-display">
              <span className="text-[#FF5722]">✦</span>
              <span>GHOSTS OF THE VOID</span>
            </div>
            <p className="text-sm leading-relaxed text-[#A7B2C5] max-w-md">
              An interactive space archaeology experience dedicated to cataloging and honoring the human-made machines, rovers, and landing stages quietly resting on Mars and the Moon.
            </p>
            <div className="text-[11px] font-mono text-[#A7B2C5]/70">
              ORIGINAL CONCEPT: NASA SPACE APPS PROJECT ARCHIVE
            </div>
          </div>

          {/* Column 2: Archives */}
          <div className="space-y-3">
            <div className="text-xs font-mono tracking-wider uppercase text-[#F4F6FA] font-semibold">
              EXPLORATION SECTORS
            </div>
            <ul className="space-y-2">
              <li>
                <Link to="/archive/mars" className="hover:text-[#FF5722] transition-colors">
                  World 01 — Mars Archive (4 Relics)
                </Link>
              </li>
              <li>
                <Link to="/archive/lunar" className="hover:text-[#69D9FF] transition-colors">
                  World 02 — Lunar Archive (3 Relics)
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-[#F4F6FA] transition-colors">
                  Command Hub / World Selector
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="hover:text-[#45D483] transition-colors">
                  Terminal 01 — Knowledge Check
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: NASA Public Archives & Credentials */}
          <div className="space-y-3">
            <div className="text-xs font-mono tracking-wider uppercase text-[#F4F6FA] font-semibold">
              OFFICIAL NASA ARCHIVES
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://science.nasa.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#F4F6FA] transition-colors"
                >
                  <span>NASA Science Directorate</span>
                  <ExternalLink className="h-3 w-3 text-[#A7B2C5]/60" />
                </a>
              </li>
              <li>
                <a
                  href="https://images.nasa.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#F4F6FA] transition-colors"
                >
                  <span>NASA Image & Video Library</span>
                  <ExternalLink className="h-3 w-3 text-[#A7B2C5]/60" />
                </a>
              </li>
              <li>
                <a
                  href="https://history.nasa.gov/alsj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#F4F6FA] transition-colors"
                >
                  <span>Apollo Lunar Surface Journal</span>
                  <ExternalLink className="h-3 w-3 text-[#A7B2C5]/60" />
                </a>
              </li>
              <li>
                <Link to="/certificate" className="hover:text-[#FFC857] transition-colors">
                  Official Exploration Certificate
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom divider and notice */}
        <div className="pt-8 border-t border-[#26344A]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#A7B2C5]/70">
          <div>
            Data sourced from official NASA public domain mission archives, JPL, and Smithsonian historical records.
          </div>
          <div className="font-mono">
            HUMANITY'S SHARED EXPEDITIONS · 1967–PRESENT
          </div>
        </div>
      </div>
    </footer>
  );
};
