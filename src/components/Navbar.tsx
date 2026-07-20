import React from "react";
import { Film, Wallet, Landmark, Lock, Presentation, Activity, MessageSquareHeart, CheckCircle2 } from "lucide-react";

interface NavbarProps {
  walletConnected: boolean;
  walletAddress: string;
  xlmBalance: string;
  onConnectWallet: () => void;
  onOpenFeedback: () => void;
  onOpenOnboarding: () => void;
  onOpenPitchDeck: () => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  walletConnected,
  walletAddress,
  xlmBalance,
  onConnectWallet,
  onOpenFeedback,
  onOpenOnboarding,
  onOpenPitchDeck,
  activeSection,
  setActiveSection,
}) => {
  const truncatedAddress = walletAddress
    ? `${walletAddress.substring(0, 5)}...${walletAddress.substring(walletAddress.length - 4)}`
    : "";

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center space-x-3">
          <div className="p-2.5 bg-gradient-to-br from-indigo-500 via-purple-600 to-amber-500 rounded-xl shadow-lg shadow-indigo-500/20">
            <Film className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                FilmSplit
              </span>
              <span className="px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded-full">
                Level 5 Growth
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">
              Decentralized Indie Film Revenue & Escrow Platform
            </p>
          </div>
        </div>

        {/* Level 5 Feature Section Toggles */}
        <div className="hidden lg:flex items-center space-x-1 p-1 bg-slate-900/80 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveSection("projects")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeSection === "projects" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveSection("escrow")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center space-x-1 transition-all ${
              activeSection === "escrow" ? "bg-amber-500 text-slate-950" : "text-slate-400 hover:text-white"
            }`}
          >
            <Lock className="w-3 h-3" />
            <span>Escrow Release</span>
          </button>
          <button
            onClick={() => setActiveSection("fiat")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center space-x-1 transition-all ${
              activeSection === "fiat" ? "bg-purple-600 text-white" : "text-slate-400 hover:text-white"
            }`}
          >
            <Landmark className="w-3 h-3" />
            <span>Fiat Off-Ramp</span>
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Pitch Deck Button */}
          <button
            onClick={onOpenPitchDeck}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 hover:text-white text-xs font-medium transition-all"
          >
            <Presentation className="w-3.5 h-3.5" />
            <span className="hidden xl:inline">Pitch Deck</span>
          </button>

          {/* User Onboarding Helper Button */}
          <button
            onClick={onOpenOnboarding}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 hover:text-white text-xs font-medium transition-all"
          >
            <Activity className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">50+ Users Hub</span>
          </button>

          {/* Feedback Button */}
          <button
            onClick={onOpenFeedback}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-300 hover:text-white text-xs font-medium transition-all"
          >
            <MessageSquareHeart className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Feedback</span>
          </button>

          {/* Wallet Connect Button */}
          {walletConnected ? (
            <div className="flex items-center space-x-2 pl-2">
              <div className="hidden xl:flex flex-col items-end text-xs">
                <span className="font-semibold text-slate-200">{truncatedAddress}</span>
                <span className="text-amber-400 font-mono">{parseFloat(xlmBalance).toLocaleString()} XLM</span>
              </div>
              <button
                onClick={onConnectWallet}
                className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-slate-200 text-xs font-medium transition-all shadow-md"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span className="xl:hidden">{truncatedAddress}</span>
                <span className="hidden xl:inline">Wallet Active</span>
              </button>
            </div>
          ) : (
            <button
              onClick={onConnectWallet}
              className="flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-semibold transition-all shadow-lg shadow-indigo-500/25"
            >
              <Wallet className="w-3.5 h-3.5" />
              <span>Connect Wallet</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
