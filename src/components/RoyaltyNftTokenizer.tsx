import React, { useState } from "react";
import { Sparkles, ShieldCheck, Coins, ArrowRight, CheckCircle2, Ticket } from "lucide-react";

export const RoyaltyNftTokenizer: React.FC = () => {
  const [nftTokens, setNftTokens] = useState([
    { id: 1, film: "The Soroban Horizon", shareBps: 2500, sharePct: "25.0%", priceXlm: 25000, holder: "Aria Sterling (Investor)", status: "Active Royalty NFT" },
    { id: 2, film: "Cyberpunk Manila", shareBps: 1500, sharePct: "15.0%", priceXlm: 15000, holder: "Apex Film Syndicate", status: "Active Royalty NFT" },
    { id: 3, film: "Indie Beats Doc", shareBps: 1000, sharePct: "10.0%", priceXlm: 10000, holder: "Angel Capital Fund", status: "Active Royalty NFT" },
  ]);

  return (
    <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/30 shadow-2xl mb-8">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-amber-500/10 text-amber-400 rounded-2xl border border-amber-500/20">
            <Ticket className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-bold text-white">Investor Royalty Rights Tokenizer (Soroban NFT SAC)</h3>
              <span className="px-2 py-0.5 text-[10px] font-bold bg-amber-500/20 text-amber-300 rounded-full border border-amber-500/30 uppercase">
                Level 7 Founder Feature
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Tokenize backend percentage shares into tradeable, yield-bearing Stellar Asset SAC Royalty Tokens
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {nftTokens.map((t) => (
          <div key={t.id} className="p-5 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-amber-950/30 border border-amber-500/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 text-[10px] font-bold border border-amber-500/20">
                  Royalty NFT #{t.id}
                </span>
                <Sparkles className="w-4 h-4 text-amber-400" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">{t.film}</h4>
              <p className="text-xl font-extrabold text-amber-400 font-mono mb-2">{t.sharePct} Royalty Rights</p>
              <p className="text-xs text-slate-400">Holder: <span className="text-slate-200 font-semibold">{t.holder}</span></p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">{t.priceXlm.toLocaleString()} XLM Mint Value</span>
              <span className="text-[10px] font-bold text-emerald-400 flex items-center space-x-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>Yield On-Chain</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
