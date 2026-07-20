import React, { useState } from "react";
import { AlertOctagon, CheckCircle2, ShieldAlert } from "lucide-react";

interface DisputeModalProps {
  projectId: string;
  isDisputed: boolean;
  onClose: () => void;
  onRaiseDispute: (projectId: string) => Promise<void>;
  onResolveDispute: (projectId: string) => Promise<void>;
  loading: boolean;
}

export const DisputeModal: React.FC<DisputeModalProps> = ({
  projectId,
  isDisputed,
  onClose,
  onRaiseDispute,
  onResolveDispute,
  loading,
}) => {
  const [error, setError] = useState<string | null>(null);

  const handleAction = async () => {
    setError(null);
    try {
      if (isDisputed) {
        await onResolveDispute(projectId);
      } else {
        await onRaiseDispute(projectId);
      }
    } catch (err: any) {
      setError(err.message || "Failed to execute dispute action.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="glass-panel w-full max-w-md p-6 rounded-3xl border border-slate-700 shadow-2xl">
        <div className="flex items-center space-x-3 mb-4">
          <div className={`p-3 rounded-2xl ${isDisputed ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"}`}>
            {isDisputed ? <CheckCircle2 className="w-6 h-6" /> : <AlertOctagon className="w-6 h-6" />}
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">
              {isDisputed ? "Resolve Dispute" : "Raise Project Dispute"}
            </h2>
            <p className="text-xs text-slate-400">Project ID: <span className="font-mono text-amber-300">{projectId}</span></p>
          </div>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center space-x-2">
            <ShieldAlert className="w-4 h-4 text-red-400 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <p className="text-xs text-slate-300 mb-6 leading-relaxed">
          {isDisputed
            ? "Resolving this dispute will unfreeze revenue payouts and allow automated atomic distributions to resume for all crew members."
            : "Raising a dispute will immediately freeze all revenue payouts on-chain until the issue is resolved."}
        </p>

        <div className="flex items-center justify-end space-x-3">
          <button onClick={onClose} className="px-4 py-2 text-xs text-slate-400 hover:text-white">
            Cancel
          </button>
          <button
            onClick={handleAction}
            disabled={loading}
            className={`px-5 py-2 text-xs font-bold rounded-xl text-white transition-all ${
              isDisputed ? "bg-emerald-600 hover:bg-emerald-500" : "bg-red-600 hover:bg-red-500"
            }`}
          >
            {loading ? "Submitting to Soroban..." : isDisputed ? "Resolve Dispute" : "Raise Dispute"}
          </button>
        </div>
      </div>
    </div>
  );
};
