import React from "react";
import { ShieldCheck, CheckCircle2, FileText, Download, Lock } from "lucide-react";

interface SecurityAuditModalProps {
  onClose: () => void;
}

export const SecurityAuditModal: React.FC<SecurityAuditModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="glass-panel w-full max-w-3xl p-6 sm:p-8 rounded-3xl border border-emerald-500/30 shadow-2xl relative my-8">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-2xl border border-emerald-500/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">FilmSplit Level 6 Security Audit Report</h2>
              <p className="text-xs text-slate-400">Formal Mentorship & Soroban Contract Security Review</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-white">✕</button>
        </div>

        <div className="space-y-4 text-xs text-slate-300 max-h-[380px] overflow-y-auto pr-2">
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <div>
                <strong className="text-white text-sm block">100% Audit Checks Passed</strong>
                <span className="text-slate-300">Audited for Soroban SDK v26, Persistent TTL, i128 math, and reentrancy locks.</span>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold uppercase text-[10px] border border-emerald-500/30">
              Mainnet Verified
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
              <strong className="text-white block mb-1">Storage Footprint Safety</strong>
              <span>Persistent TTL extension prevents key eviction during ledger state updates.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
              <strong className="text-white block mb-1">Arithmetic Overflow Protection</strong>
              <span>Calculated with checked `i128` stroop precision (`amount * BPS / 10,000`).</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
              <strong className="text-white block mb-1">Dispute Freeze Governance</strong>
              <span>Immediate execution panic if `is_disputed` boolean flag is raised.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
              <strong className="text-white block mb-1">Multi-Sig & Fee Sponsorship</strong>
              <span>2-of-3 threshold escrow signatures + gasless FeeBump support.</span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
          <a
            href="https://github.com/elijahgmz/filmsplit-level6/blob/main/SECURITY_AUDIT.md"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center space-x-1.5 transition-all"
          >
            <FileText className="w-4 h-4" />
            <span>View Full SECURITY_AUDIT.md</span>
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-extrabold transition-all"
          >
            Close Audit Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
