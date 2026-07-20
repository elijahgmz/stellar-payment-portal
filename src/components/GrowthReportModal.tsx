import React from "react";
import { TrendingUp, CheckCircle2, FileText, Download, Users, DollarSign } from "lucide-react";

interface GrowthReportModalProps {
  onClose: () => void;
}

export const GrowthReportModal: React.FC<GrowthReportModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="glass-panel w-full max-w-3xl p-6 sm:p-8 rounded-3xl border border-amber-500/30 shadow-2xl relative my-8">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-amber-500/10 text-amber-400 rounded-2xl border border-amber-500/20">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">FilmSplit Level 7 Monthly Growth & Retention Report</h2>
              <p className="text-xs text-slate-400">Founder Belt Startup Performance & Traction Metrics</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-white">✕</button>
        </div>

        <div className="space-y-4 text-xs text-slate-300 max-h-[380px] overflow-y-auto pr-2">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
              <span className="text-xl font-extrabold text-amber-400 block">70 Users</span>
              <span className="text-[10px] text-slate-400">50 NEW Verified Mainnet Users</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
              <span className="text-xl font-extrabold text-emerald-400 block">450k XLM</span>
              <span className="text-[10px] text-slate-400">Mainnet Volume Settled</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
              <span className="text-xl font-extrabold text-purple-400 block">92%</span>
              <span className="text-[10px] text-slate-400">Week 4 Cohort Retention</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
              <span className="text-xl font-extrabold text-indigo-400 block">+88 NPS</span>
              <span className="text-[10px] text-slate-400">Net Promoter Score</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
            <h4 className="text-xs font-bold text-white mb-1">Protocol Revenue & Monetization</h4>
            <p className="text-[11px] text-slate-300">
              0.5% protocol fee automatically collected on revenue distribution calls. Total mainnet fee revenue to date: 2,250 XLM.
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
          <a
            href="https://github.com/elijahgmz/filmsplit-level7/blob/main/GROWTH_REPORT.md"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center space-x-1.5 transition-all"
          >
            <FileText className="w-4 h-4" />
            <span>View Full GROWTH_REPORT.md</span>
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold transition-all"
          >
            Close Report Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
