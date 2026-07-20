import React, { useState } from "react";
import { Coins, Sparkles, AlertCircle, ArrowUpRight } from "lucide-react";

interface DistributeRevenueModalProps {
  projectId: string;
  onClose: () => void;
  onSubmit: (projectId: string, amountXlm: number) => Promise<void>;
  loading: boolean;
  userBalance: string;
}

export const DistributeRevenueModal: React.FC<DistributeRevenueModalProps> = ({
  projectId,
  onClose,
  onSubmit,
  loading,
  userBalance,
}) => {
  const [amount, setAmount] = useState("100");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const val = parseFloat(amount);
    if (isNaN(val) || val <= 0) {
      setError("Please enter a valid payout amount.");
      return;
    }

    if (val >= parseFloat(userBalance)) {
      setError(`Insufficient balance. You have ${userBalance} XLM.`);
      return;
    }

    try {
      await onSubmit(projectId, val);
    } catch (err: any) {
      setError(err.message || "Failed to execute payment distribution on Soroban.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="glass-panel w-full max-w-lg p-6 sm:p-8 rounded-3xl border border-amber-500/30 shadow-2xl shadow-amber-500/10">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-amber-500/10 text-amber-400 rounded-2xl border border-amber-500/20">
              <Coins className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Distribute Film Revenue</h2>
              <p className="text-xs text-slate-400">Atomic multi-collaborator payout for <span className="font-mono text-amber-300">{projectId}</span></p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all"
          >
            ✕
          </button>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-400" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Payout Amount (XLM)
              </label>
              <span className="text-xs text-slate-400">Available: <span className="text-amber-400 font-mono">{userBalance} XLM</span></span>
            </div>
            <div className="relative">
              <input
                type="number"
                step="0.01"
                placeholder="100.0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-3 rounded-xl glass-input text-lg font-bold text-amber-400 pr-16"
                required
              />
              <span className="absolute right-4 top-3.5 text-xs font-bold text-slate-400">XLM</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-300 space-y-1">
            <div className="flex items-center justify-between font-semibold">
              <span>Automatic Atomic Distribution</span>
              <Sparkles className="w-4 h-4 text-indigo-400" />
            </div>
            <p className="text-[11px] text-slate-400">
              The Soroban contract will calculate and route exact basis-point allocations to every crew member's wallet instantly in a single transaction.
            </p>
          </div>

          <div className="pt-4 flex items-center justify-end space-x-3 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 text-xs font-semibold transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 text-xs font-extrabold shadow-lg shadow-amber-500/25 flex items-center space-x-2 transition-all disabled:opacity-50"
            >
              {loading ? (
                <span>Executing Payout...</span>
              ) : (
                <>
                  <span>Execute Payout</span>
                  <ArrowUpRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
