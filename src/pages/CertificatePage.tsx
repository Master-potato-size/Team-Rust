import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Printer, ArrowLeft, Award, Sparkles, Check, Edit3, ShieldCheck } from 'lucide-react';
import { useExploration } from '../context/ExplorationContext';
import { Breadcrumb } from '../components/Breadcrumb';
import { soundManager } from '../utils/audio';

export const CertificatePage: React.FC = () => {
  const { recipientName, setRecipientName, isCertificateAvailable } = useExploration();
  const [nameInput, setNameInput] = useState(recipientName);
  const [isEditing, setIsEditing] = useState(false);

  const handleNameSave = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = nameInput.trim() ? nameInput.trim() : 'SPACE EXPLORER';
    setRecipientName(trimmed);
    setNameInput(trimmed);
    setIsEditing(false);
    soundManager.playConfirm();
  };

  const handlePrint = () => {
    soundManager.playConfirm();
    window.print();
  };

  const conferralDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-[#060814] text-[#F4F6FA] py-10 px-4 sm:px-6 lg:px-8 bg-starfield">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Top Navigation & Controls (Hidden in Print) */}
        <div className="no-print flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[#26344A] pb-6">
          <Breadcrumb
            items={[
              { label: 'GHOSTS OF THE VOID', path: '/' },
              { label: 'MISSION LOG', path: '/mission-log' },
              { label: 'CERTIFICATE' }
            ]}
          />

          <div className="flex items-center gap-3">
            <Link
              to="/mission-log"
              className="flex items-center gap-2 px-4 py-2 text-xs font-mono border border-[#26344A] bg-[#101827] text-[#A7B2C5] hover:text-[#F4F6FA] hover:border-[#69D9FF] rounded-xs transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>RETURN TO MISSION LOG</span>
            </Link>

            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-6 py-2.5 bg-[#FFC857] hover:bg-[#FFC857]/90 text-[#060814] font-bold text-xs tracking-wider uppercase rounded-xs transition-all shadow-md shadow-[#FFC857]/20"
            >
              <Printer className="h-4 w-4" />
              <span>PRINT CERTIFICATE</span>
            </button>
          </div>
        </div>

        {/* Customization Bar (Hidden in Print) */}
        <div className="no-print p-6 rounded-sm bg-[#101827] border border-[#26344A] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono text-[#FFC857] uppercase font-bold">
              <Edit3 className="h-3.5 w-3.5" />
              <span>RECIPIENT PERSONALIZATION</span>
            </div>
            <p className="text-sm text-[#A7B2C5]">
              Customize the explorer name inscribed upon your official physical award.
            </p>
          </div>

          <form onSubmit={handleNameSave} className="flex items-center gap-3 w-full md:w-auto">
            <input
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              placeholder="ENTER YOUR FULL NAME"
              className="px-4 py-2.5 bg-[#060814] border border-[#26344A] text-[#F4F6FA] text-sm font-display uppercase tracking-wider rounded-xs focus:outline-none focus:border-[#FFC857] w-full sm:w-64"
              maxLength={40}
            />
            <button
              type="submit"
              className="px-4 py-2.5 bg-[#101827] hover:bg-[#060814] border border-[#26344A] text-[#FFC857] hover:border-[#FFC857] text-xs font-mono uppercase tracking-wider rounded-xs shrink-0 transition-colors"
            >
              UPDATE NAME
            </button>
          </form>
        </div>

        {/* Printable Certificate Frame */}
        {/* Proportions: ~900 x 600, Light background #F4F6FA, Double thin navy/gold border */}
        <div className="flex justify-center w-full">
          <div
            id="printable-certificate-container"
            className="w-full max-w-[900px] min-h-[580px] bg-[#F4F6FA] text-[#060814] p-8 sm:p-12 relative rounded-xs shadow-2xl transition-all duration-300"
            style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
            }}
          >
            {/* Outer Navy Border */}
            <div className="absolute inset-4 border border-[#101827]/40 pointer-events-none" />

            {/* Inner Gold Inset Border */}
            <div className="absolute inset-6 border-2 border-[#D4AF37] pointer-events-none" />

            {/* Corner Decorative Ornaments */}
            <div className="absolute top-7 left-7 text-[#D4AF37] text-xs select-none pointer-events-none">✦</div>
            <div className="absolute top-7 right-7 text-[#D4AF37] text-xs select-none pointer-events-none">✦</div>
            <div className="absolute bottom-7 left-7 text-[#D4AF37] text-xs select-none pointer-events-none">✦</div>
            <div className="absolute bottom-7 right-7 text-[#D4AF37] text-xs select-none pointer-events-none">✦</div>

            {/* Certificate Contents */}
            <div className="relative z-10 flex flex-col items-center justify-between text-center h-full min-h-[500px] py-4">
              
              {/* Header Badge */}
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2 text-xs font-mono tracking-widest text-[#101827]/80 uppercase">
                  <span>NASA SPACE ARCHAEOLOGY INITIATIVE</span>
                  <span>·</span>
                  <span>RECORD #VOID-71-ALPHA</span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#060814] font-display uppercase">
                  CERTIFICATE OF EXPLORATION
                </h1>

                <div className="w-24 h-[2px] bg-[#D4AF37] mx-auto my-2" />
              </div>

              {/* Conferred Title & Recipient */}
              <div className="space-y-4 my-6 w-full max-w-2xl">
                <span className="text-xs font-mono uppercase tracking-widest text-[#101827]/70 block">
                  THIS EXPEDITION HONOR IS PROUDLY CONFERRED UPON
                </span>

                {/* Recipient Name in large display font */}
                <div className="text-2xl sm:text-4xl font-bold font-display text-[#060814] tracking-wide border-b border-[#060814]/30 pb-2 mx-auto max-w-lg uppercase">
                  {recipientName}
                </div>

                <div className="pt-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-bold block mb-1">
                    CONFERRED APPOINTMENT:
                  </span>
                  <div className="text-xl sm:text-2xl font-bold font-display text-[#101827] uppercase tracking-wider">
                    CHIEF SPACE ARCHAEOLOGIST
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#101827]/80 max-w-xl mx-auto leading-relaxed font-sans pt-1">
                  For successfully completing the exploration of the Spirit Rover and uncovering the scientific legacy of humanity's robotic exploration of Mars.
                </p>
              </div>

              {/* Seal and Signatures Footer */}
              <div className="w-full grid grid-cols-3 items-end pt-6 border-t border-[#101827]/20 text-xs">
                
                {/* Left Signature */}
                <div className="text-center space-y-1">
                  <div className="font-display font-bold text-sm tracking-widest text-[#060814]">
                    DIRECTORATE
                  </div>
                  <div className="w-32 h-[1px] bg-[#101827]/50 mx-auto" />
                  <div className="text-[10px] font-mono text-[#101827]/70 uppercase">
                    Space Apps Archive
                  </div>
                </div>

                {/* Center Seal */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full border-2 border-[#D4AF37] flex items-center justify-center bg-[#F4F6FA] text-[#D4AF37] shadow-inner">
                    <Award className="h-8 w-8" />
                  </div>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#101827]/70 mt-1">
                    OFFICIAL SEAL
                  </span>
                </div>

                {/* Right Date */}
                <div className="text-center space-y-1">
                  <div className="font-mono font-semibold text-xs text-[#060814]">
                    {conferralDate}
                  </div>
                  <div className="w-32 h-[1px] bg-[#101827]/50 mx-auto" />
                  <div className="text-[10px] font-mono text-[#101827]/70 uppercase">
                    Date of Conferred Honor
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* Certificate Bottom Tips (Hidden in Print) */}
        <div className="no-print text-center text-xs text-[#A7B2C5] space-y-2 pt-4">
          <p>
            Tip: Select "Landscape" layout and enable "Background graphics" in your browser's print dialog for the best physical reproduction.
          </p>
          <div className="font-mono text-[11px] text-[#A7B2C5]/70">
            RECORD STORED IN BROWSER LOCAL STORAGE · NO SIGN-IN REQUIRED
          </div>
        </div>

      </div>
    </div>
  );
};
