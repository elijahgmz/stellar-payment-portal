import React, { useState } from "react";
import { Tv, Play, CheckCircle2, Sparkles, Radio } from "lucide-react";

export const StreamingRevenueApi: React.FC = () => {
  const [isStreaming, setIsStreaming] = useState(true);
  const [streamedXlm, setStreamedXlm] = useState(1450);

  const triggerStreamMicropayout = () => {
    setStreamedXlm((prev) => prev + 50);
  };

  return (
    <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-indigo-500/30 shadow-2xl mb-8">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-2xl border border-indigo-500/20">
            <Tv className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-bold text-white">Automated Web3 Streaming Revenue Micropayout API</h3>
              <span className="px-2 py-0.5 text-[10px] font-bold bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/30 uppercase">
                Level 7 Web3 Streaming
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Routes real-time pay-per-view video stream micropayouts directly into Soroban revenue split contracts
            </p>
          </div>
        </div>

        <button
          onClick={triggerStreamMicropayout}
          className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-bold shadow-md shadow-indigo-500/20 flex items-center space-x-1.5 transition-all"
        >
          <Play className="w-3.5 h-3.5" />
          <span>Simulate Viewer Micropayout (+50 XLM)</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
          <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Live Streaming Protocol</span>
          <span className="text-xs font-mono text-indigo-400 font-bold flex items-center space-x-1">
            <Radio className="w-3.5 h-3.5 animate-pulse text-indigo-400" />
            <span>Pay-Per-View Video API</span>
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
          <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Accumulated Micropayout Revenue</span>
          <span className="text-lg font-extrabold text-amber-400 font-mono">{streamedXlm.toLocaleString()} XLM</span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
          <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Soroban Split Auto-Routing</span>
          <span className="text-xs font-bold text-emerald-400 flex items-center space-x-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Atomic Payout Active</span>
          </span>
        </div>
      </div>
    </div>
  );
};
