import React from "react";
import { Clapperboard, Coins, Users, ShieldCheck } from "lucide-react";

interface HeroStatsProps {
  totalProjects: number;
  totalDistributedXlm: string;
  totalCollaborators: number;
  contractAddress: string;
}

export const HeroStats: React.FC<HeroStatsProps> = ({
  totalProjects,
  totalDistributedXlm,
  totalCollaborators,
  contractAddress,
}) => {
  const truncatedContract = contractAddress
    ? `${contractAddress.substring(0, 6)}...${contractAddress.substring(contractAddress.length - 6)}`
    : "CA2B...JVTG";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {/* Stat 1 */}
      <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-indigo-500/30 transition-all group">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Active Film Projects</p>
            <h3 className="text-2xl font-extrabold text-white mt-1 group-hover:text-indigo-400 transition-colors">
              {totalProjects}
            </h3>
          </div>
          <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20 group-hover:scale-110 transition-transform">
            <Clapperboard className="w-6 h-6" />
          </div>
        </div>
        <p className="text-[11px] text-slate-500 mt-2">Verified Soroban persistent state</p>
      </div>

      {/* Stat 2 */}
      <div className="glass-panel-gold p-5 rounded-2xl hover:border-amber-500/40 transition-all group">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-amber-300/80 uppercase tracking-wider">Distributed Revenue</p>
            <h3 className="text-2xl font-extrabold text-amber-400 mt-1">
              {totalDistributedXlm} <span className="text-sm font-semibold">XLM</span>
            </h3>
          </div>
          <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/30 group-hover:scale-110 transition-transform">
            <Coins className="w-6 h-6" />
          </div>
        </div>
        <p className="text-[11px] text-amber-200/60 mt-2">Atomic split transactions executed</p>
      </div>

      {/* Stat 3 */}
      <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-purple-500/30 transition-all group">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Active Collaborators</p>
            <h3 className="text-2xl font-extrabold text-white mt-1 group-hover:text-purple-400 transition-colors">
              {totalCollaborators}
            </h3>
          </div>
          <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl border border-purple-500/20 group-hover:scale-110 transition-transform">
            <Users className="w-6 h-6" />
          </div>
        </div>
        <p className="text-[11px] text-slate-500 mt-2">Directors, producers, crew & investors</p>
      </div>

      {/* Stat 4 */}
      <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-emerald-500/30 transition-all group">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Soroban Contract</p>
            <h3 className="text-sm font-mono font-semibold text-emerald-400 mt-2 truncate">
              {truncatedContract}
            </h3>
          </div>
          <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20 group-hover:scale-110 transition-transform">
            <ShieldCheck className="w-6 h-6" />
          </div>
        </div>
        <a
          href={`https://stellar.expert/explorer/testnet/contract/${contractAddress}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] text-emerald-400/80 hover:text-emerald-300 underline mt-2 block"
        >
          View on Stellar Expert Explorer &rarr;
        </a>
      </div>
    </div>
  );
};
