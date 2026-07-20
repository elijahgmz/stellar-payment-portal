import React, { useState } from "react";
import { UserPlus, UserMinus, ShieldAlert } from "lucide-react";

interface ManageCollaboratorsModalProps {
  projectId: string;
  onClose: () => void;
  onAddCollaborator: (projectId: string, address: string, shareBps: number) => Promise<void>;
  onRemoveCollaborator: (projectId: string, address: string) => Promise<void>;
  loading: boolean;
}

export const ManageCollaboratorsModal: React.FC<ManageCollaboratorsModalProps> = ({
  projectId,
  onClose,
  onAddCollaborator,
  onRemoveCollaborator,
  loading,
}) => {
  const [activeMode, setActiveMode] = useState<"add" | "remove">("add");
  const [addAddress, setAddAddress] = useState("");
  const [addSharePercent, setAddSharePercent] = useState("10");
  const [removeAddress, setRemoveAddress] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (activeMode === "add") {
      if (!addAddress.startsWith("G") || addAddress.length !== 56) {
        setError("Invalid Stellar address. Must be a 56 character public key.");
        return;
      }
      const num = parseFloat(addSharePercent);
      if (isNaN(num) || num <= 0 || num >= 100) {
        setError("Share percentage must be between 0% and 100%.");
        return;
      }
      try {
        await onAddCollaborator(projectId, addAddress.trim(), Math.round(num * 100));
      } catch (err: any) {
        setError(err.message || "Failed to add collaborator.");
      }
    } else {
      if (!removeAddress.startsWith("G") || removeAddress.length !== 56) {
        setError("Invalid Stellar address. Must be a 56 character public key.");
        return;
      }
      try {
        await onRemoveCollaborator(projectId, removeAddress.trim());
      } catch (err: any) {
        setError(err.message || "Failed to remove collaborator.");
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="glass-panel w-full max-w-md p-6 rounded-3xl border border-slate-700 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
          <h2 className="text-lg font-bold text-white">Manage Crew ({projectId})</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white">✕</button>
        </div>

        {/* Mode Selector */}
        <div className="grid grid-cols-2 gap-2 p-1 bg-slate-900 rounded-xl mb-5">
          <button
            type="button"
            onClick={() => setActiveMode("add")}
            className={`py-2 text-xs font-bold rounded-lg flex items-center justify-center space-x-1 transition-all ${
              activeMode === "add" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"
            }`}
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>Add Member</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveMode("remove")}
            className={`py-2 text-xs font-bold rounded-lg flex items-center justify-center space-x-1 transition-all ${
              activeMode === "remove" ? "bg-red-600 text-white" : "text-slate-400 hover:text-white"
            }`}
          >
            <UserMinus className="w-3.5 h-3.5" />
            <span>Remove Member</span>
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center space-x-2">
            <ShieldAlert className="w-4 h-4 text-red-400 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {activeMode === "add" ? (
            <>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Collaborator Address (G...)</label>
                <input
                  type="text"
                  placeholder="GAXCXDDP..."
                  value={addAddress}
                  onChange={(e) => setAddAddress(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl glass-input text-xs font-mono"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">New Share Percentage (%)</label>
                <input
                  type="number"
                  step="0.1"
                  placeholder="10.0"
                  value={addSharePercent}
                  onChange={(e) => setAddSharePercent(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl glass-input text-xs font-bold text-amber-400"
                  required
                />
              </div>
            </>
          ) : (
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Collaborator Address to Remove (G...)</label>
              <input
                type="text"
                placeholder="GB6JWK..."
                value={removeAddress}
                onChange={(e) => setRemoveAddress(e.target.value)}
                className="w-full px-3 py-2 rounded-xl glass-input text-xs font-mono"
                required
              />
            </div>
          )}

          <div className="pt-3 flex justify-end space-x-2 border-t border-slate-800">
            <button type="button" onClick={onClose} className="px-4 py-2 text-xs text-slate-400 hover:text-white">
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className={`px-5 py-2 text-xs font-bold rounded-xl text-white transition-all ${
                activeMode === "add" ? "bg-indigo-600 hover:bg-indigo-500" : "bg-red-600 hover:bg-red-500"
              }`}
            >
              {loading ? "Processing..." : activeMode === "add" ? "Add to Project" : "Remove from Project"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
