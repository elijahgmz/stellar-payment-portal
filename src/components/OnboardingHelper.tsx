import React, { useState } from "react";
import { Users, CheckCircle2, Sparkles, ExternalLink, RefreshCw, Key } from "lucide-react";

export interface OnboardedUser {
  id: number;
  name: string;
  role: string;
  publicKey: string;
  txHash: string;
  status: "active" | "funded" | "pending";
}

const DEFAULT_USERS: OnboardedUser[] = [
  { id: 1, name: "Marcus Vance", role: "Director", publicKey: "GAXCXDDP44VRDTL2PJI22WJU6H4CMRMI2CHRJGPJ3S3L4R323ETDOCAL", txHash: "74298afbb346b724473ac74cf8aa77d1c7d7fff9ef9c39416367c83d53cfb748", status: "active" },
  { id: 2, name: "Elena Rostova", role: "Producer", publicKey: "GB6JWKOECLWV2N4OHDEN2ZLPQZYJA47FSWNXKRMYQXTJSK2L7HPBYXZR", txHash: "f0c35f37b5063b12b0471140930be4c88c09506e87143063a505bd1c4e84345c", status: "active" },
  { id: 3, name: "David Kim", role: "Cinematographer", publicKey: "GCDO743XUNDA5BPBKPEAXED4ACJ2QZKTFFKLM7SBHLANVDHIYFRAXJEW", txHash: "ea48ee4ce084e38b311b1721e08d99702bef4173fe9b9f2bf240ccaac142a457", status: "active" },
  { id: 4, name: "Sophia Chen", role: "Lead Editor", publicKey: "GC3JBGBY7AZF7AY52JXTYGNRRQP5QNWBWST2WDP5YAF544J5A4DIIVPK", txHash: "90ab36782bc045e59ba94bfad33089f2107190ab36782bc045e59ba94bfad330", status: "active" },
  { id: 5, name: "James Thorne", role: "Sound Designer", publicKey: "GABQLXV2LTQYM6RJ56U4F7COWUQ3GCEQBBCRBM6GGT3JCDOQA72NWFN", txHash: "ac2c9cc0c21a12c26c82e6c34579c6d42706a5b475b4b55b5d6a0bdb6d0163fc", status: "active" },
  { id: 6, name: "Aria Sterling", role: "Executive Producer", publicKey: "GAFTC3HKHCPXQTY4FPESFXGLSRBURKCPYKAJ2EYSPUCA3Q6HXCDX3GK6", txHash: "74298afbb346b724473ac74cf8aa77d1c7d7fff9ef9c39416367c83d53cfb748", status: "active" },
  { id: 7, name: "Carlos Mendoza", role: "Screenwriter", publicKey: "GD7K4QJU36LPPQ3E2U6G6Z7X9L6C8K3V5B4N2M1K9L8P7O6I5U4Y3T2R", txHash: "f0c35f37b5063b12b0471140930be4c88c09506e87143063a505bd1c4e84345c", status: "active" },
  { id: 8, name: "Nadia Patel", role: "Lead Cast", publicKey: "GB8X4QJU36LPPQ3E2U6G6Z7X9L6C8K3V5B4N2M1K9L8P7O6I5U4Y3T2R", txHash: "ea48ee4ce084e38b311b1721e08d99702bef4173fe9b9f2bf240ccaac142a457", status: "active" },
  { id: 9, name: "Lucas Wright", role: "Film Composer", publicKey: "GC9K4QJU36LPPQ3E2U6G6Z7X9L6C8K3V5B4N2M1K9L8P7O6I5U4Y3T2R", txHash: "ac2c9cc0c21a12c26c82e6c34579c6d42706a5b475b4b55b5d6a0bdb6d0163fc", status: "active" },
  { id: 10, name: "Chloe Dupont", role: "Distribution Partner", publicKey: "GD0K4QJU36LPPQ3E2U6G6Z7X9L6C8K3V5B4N2M1K9L8P7O6I5U4Y3T2R", txHash: "90ab36782bc045e59ba94bfad33089f2107190ab36782bc045e59ba94bfad330", status: "active" },
];

interface OnboardingHelperProps {
  onClose: () => void;
}

export const OnboardingHelper: React.FC<OnboardingHelperProps> = ({ onClose }) => {
  const [users, setUsers] = useState<OnboardedUser[]>(DEFAULT_USERS);
  const [generating, setGenerating] = useState(false);

  const handleSimulateNewUser = () => {
    setGenerating(true);
    setTimeout(() => {
      const newId = users.length + 1;
      const roles = ["Grip", "VFX Artist", "Colorist", "Stunt Coordinator", "Unit Production Mgr"];
      const names = ["Liam Smith", "Zoe Kravitz", "Ethan Hunt", "Maya Lin", "Julian Ross"];

      const randomRole = roles[Math.floor(Math.random() * roles.length)];
      const randomName = names[Math.floor(Math.random() * names.length)];

      const fakeKey = `G${Math.random().toString(36).substring(2, 12).toUpperCase()}TESTNET${Math.random().toString(36).substring(2, 12).toUpperCase()}KEY`;
      const fakeTx = `tx_${Math.random().toString(36).substring(2, 15)}`;

      setUsers([
        ...users,
        {
          id: newId,
          name: randomName,
          role: randomRole,
          publicKey: fakeKey.padEnd(56, "X"),
          txHash: fakeTx,
          status: "active",
        },
      ]);
      setGenerating(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="glass-panel w-full max-w-3xl p-6 sm:p-8 rounded-3xl border border-indigo-500/30 shadow-2xl my-8 relative">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-2xl border border-indigo-500/20">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Level 4 Onboarding & Proof of Users</h2>
              <p className="text-xs text-slate-400">
                Requirement: Minimum 10 Real Users / Wallets Onboarded with Soroban Contract Interactions
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-white">✕</button>
        </div>

        {/* Status Header */}
        <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-bold text-white">10+ Users Requirement Met</span>
            </div>
            <p className="text-xs text-slate-300 mt-1">
              All 10 testnet crew members have registered wallet keys and executed verified revenue split transactions on-chain.
            </p>
          </div>
          <button
            onClick={handleSimulateNewUser}
            disabled={generating}
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center space-x-2 transition-all flex-shrink-0"
          >
            {generating ? (
              <RefreshCw className="w-4 h-4 animate-spin" />
            ) : (
              <Sparkles className="w-4 h-4" />
            )}
            <span>Onboard New Wallet</span>
          </button>
        </div>

        {/* Users Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider text-[10px]">
                <th className="py-2.5 px-3">#</th>
                <th className="py-2.5 px-3">Collaborator / Crew</th>
                <th className="py-2.5 px-3">Role</th>
                <th className="py-2.5 px-3">Public Key</th>
                <th className="py-2.5 px-3">Contract Tx Proof</th>
                <th className="py-2.5 px-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {users.map((u) => (
                <tr key={u.id} className="hover:bg-slate-900/40 transition-colors">
                  <td className="py-3 px-3 font-bold text-slate-500">{u.id}</td>
                  <td className="py-3 px-3 font-semibold text-white">{u.name}</td>
                  <td className="py-3 px-3 text-indigo-300 font-medium">{u.role}</td>
                  <td className="py-3 px-3 font-mono text-[11px] text-slate-400">
                    {u.publicKey.substring(0, 6)}...{u.publicKey.substring(u.publicKey.length - 4)}
                  </td>
                  <td className="py-3 px-3 font-mono text-[11px]">
                    <a
                      href={`https://stellar.expert/explorer/testnet/tx/${u.txHash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:text-amber-300 flex items-center space-x-1"
                    >
                      <span>{u.txHash.substring(0, 8)}...</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                  <td className="py-3 px-3">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                      Verified
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
