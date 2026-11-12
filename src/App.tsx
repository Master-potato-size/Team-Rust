/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ExplorationProvider } from './context/ExplorationContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { SoundEffects } from './components/SoundEffects';

// Pages
import { LaunchpadPage } from './pages/LaunchpadPage';
import { CommandHubPage } from './pages/CommandHubPage';
import { MarsArchivePage } from './pages/MarsArchivePage';
import { LunarArchivePage } from './pages/LunarArchivePage';
import { RelicStoryPage } from './pages/RelicStoryPage';
import { QuizPage } from './pages/QuizPage';
import { QuizCorrectPage } from './pages/QuizCorrectPage';
import { QuizIncorrectPage } from './pages/QuizIncorrectPage';
import { MissionLogPage } from './pages/MissionLogPage';
import { CertificatePage } from './pages/CertificatePage';
import { MasterCatalogPage } from './pages/MasterCatalogPage';

export default function App() {
  return (
    <ExplorationProvider>
      <BrowserRouter>
        <ScrollToTop />
        <SoundEffects />
        <div className="flex min-h-screen flex-col bg-[#060814] text-[#F4F6FA]">
          <Navbar />
          <main className="flex-1">
            <Routes>
              {/* Screen 01: Launchpad / Homepage */}
              <Route path="/" element={<LaunchpadPage />} />

              {/* Screen 02: Command Hub / Destination Selector */}
              <Route path="/destinations" element={<CommandHubPage />} />

              {/* Master Extraterrestrial Relic Registry (50+ Relics) */}
              <Route path="/catalog" element={<MasterCatalogPage />} />

              {/* Screen 03: Mars Archive */}
              <Route path="/archive/mars" element={<MarsArchivePage />} />

              {/* Screen 04: Lunar Archive */}
              <Route path="/archive/lunar" element={<LunarArchivePage />} />

              {/* Screen 05-11: Relic Story Pages */}
              <Route path="/relic" element={<Navigate to="/catalog" replace />} />
              <Route path="/relic/" element={<Navigate to="/catalog" replace />} />
              <Route path="/relic/:slug" element={<RelicStoryPage />} />

              {/* Screen 12: Terminal Quiz */}
              <Route path="/quiz" element={<QuizPage />} />

              {/* Screen 13: Correct Answer */}
              <Route path="/quiz/correct" element={<QuizCorrectPage />} />

              {/* Screen 14: Incorrect Answer */}
              <Route path="/quiz/incorrect" element={<QuizIncorrectPage />} />

              {/* Screen 15: Mission Log */}
              <Route path="/mission-log" element={<MissionLogPage />} />

              {/* Screen 16: Certificate Preview */}
              <Route path="/certificate" element={<CertificatePage />} />

              {/* Fallback to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ExplorationProvider>
  );
}
