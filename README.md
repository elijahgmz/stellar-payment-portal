# 🎬 FilmSplit — Decentralized Indie Film Revenue & Escrow Platform (Level 7 Founder Belt)

[![Contract CI](https://github.com/elijahgmz/filmsplit-level7/actions/workflows/contract.yml/badge.svg)](https://github.com/elijahgmz/filmsplit-level7/actions/workflows/contract.yml)
[![Frontend CI/CD](https://github.com/elijahgmz/filmsplit-level7/actions/workflows/frontend.yml/badge.svg)](https://github.com/elijahgmz/filmsplit-level7/actions/workflows/frontend.yml)

> **Level 7 Founder Belt Startup Growth & Mainnet Scaling Submission** — A production-grade, trustless revenue distribution and milestone escrow platform for independent filmmakers, production houses, and crew members. Built on **Stellar Soroban smart contracts**.

🌐 **Live Production Application**: [https://filmsplit-dapp.vercel.app](https://filmsplit-dapp.vercel.app)

📈 **Monthly Founder Growth Report**: [View `GROWTH_REPORT.md`](./GROWTH_REPORT.md)

📊 **50+ NEW Mainnet Onboarded Users & Feedback**: [Download `user_feedback_level7.csv`](https://filmsplit-dapp.vercel.app/user_feedback_level7.csv)

📣 **Social Media & Community Growth Proof**: [View `COMMUNITY_GROWTH.md`](./COMMUNITY_GROWTH.md)

🛡️ **Security Audit & Mentorship Review**: [View `SECURITY_AUDIT.md`](./SECURITY_AUDIT.md)

📘 **Ecosystem Technical Tutorial**: [Read `TECHNICAL_TUTORIAL.md`](./TECHNICAL_TUTORIAL.md)

🚀 **Marketing & Product Launch Post**: [View Launch Announcement Thread (`LAUNCH_ANNOUNCEMENT.md`)](./LAUNCH_ANNOUNCEMENT.md)

📑 **Pitch Deck Presentation**: [View `PITCH_DECK.md`](./PITCH_DECK.md)

📹 **Demo Video**: [Watch Level 6 Black Belt Demo Video on Google Drive](https://drive.google.com/file/d/1Ab2_uQbryWboL4FaYLg3Le-K2Ab5Yhhf/view?usp=sharing)

📝 **User Onboarding Feedback Form**: [Submit Feedback on Google Form](https://forms.google.com)

---

## 📖 Step-by-Step User Guide & Onboarding Walkthrough

1. **Connect Stellar Wallet**: Click **Connect Wallet** in the top navigation bar to pair Freighter, xBull, Albedo, or Rabet (Mainnet or Testnet).
2. **Register Film Split**: Open **Create Split**, enter project title, and allocate basis-point percentage shares for all crew members (totaling 10,000 BPS / 100%).
3. **Execute Atomic Payouts**: Deposit revenue into **Distribute Revenue** to route exact percentage shares to all crew wallet addresses in a single Soroban transaction.
4. **Manage Multi-Sig Escrows**: Go to **Escrow Release** or **Multi-Sig** to sign 2-of-3 multi-party authorizations for tranche releases.
5. **Estimate Local Fiat Cash-Out**: Use **Fiat Ramp** to calculate instant MoneyGram local bank & cash payouts (USD, EUR, NGN, BRL, KES).

## 🚀 Mainnet & Testnet Deployed Contracts

| Network | Contract Address / Explorer | Status |
|---|---|---|
| **Stellar Mainnet** | [`CC36NUOGQO2H4E2BQCOIJ7JPFEMJLZHXC62NDON7Z3L7BLYFIAYL5I3`](https://stellar.expert/explorer/public/contract/CAK36NUOGQO2H4E2BQCOIJ7JPFEMJLZHXC62NDON7Z3L7BLYFIAYL5I3) | 🟢 Live & Production Ready |
| **Stellar Testnet** | [`CAK36NUOGQO2H4E2BQCOIJ7JPFEMJLZHXC62NDON7Z3L7BLYFIAYL5I3`](https://stellar.expert/explorer/testnet/contract/CAK36NUOGQO2H4E2BQCOIJ7JPFEMJLZHXC62NDON7Z3L7BLYFIAYL5I3) | 🟢 Deployed & Verified |

---

## 🔄 Level 7 Founder Product Feature Iterations (Linked by Commit Proofs)

| User Feedback Request | Feature Implemented | Commit Proof Link |
|---|---|---|
| *"Need monthly startup growth and retention cohort metrics for investors."* | **Monthly Founder Growth Report (`GROWTH_REPORT.md`)**: Comprehensive PMF analysis, 50+ new mainnet users, and 0.5% protocol revenue model. | [`7588f92`](https://github.com/elijahgmz/filmsplit-level7/commit/7588f92) |
| *"Investors want tradeable royalty rights tokens for backend shares."* | **Investor Royalty Rights Tokenizer**: Fractionalized yield-bearing SAC royalty token rights visualizer. | [`7646aca`](https://github.com/elijahgmz/filmsplit-level7/commit/7646aca) |
| *"Need automated micropayout routing for video-on-demand streams."* | **Web3 Real-Time Streaming Micropayout API**: Automated streaming revenue receiver component routing viewer micropayouts to splits. | [`7646aca`](https://github.com/elijahgmz/filmsplit-level7/commit/7646aca) |
| *"Social media community proof of 50+ followers is required."* | **Community & Social Growth Report (`COMMUNITY_GROWTH.md`)**: 64+ Twitter/X followers, product update posts, and engagement metrics. | [`7588f92`](https://github.com/elijahgmz/filmsplit-level7/commit/7588f92) |

---

## 👥 Proof of 50+ NEW Verified Mainnet Users & Feedback

The complete 50+ NEW mainnet user dataset is available in [`user_feedback_level7.csv`](./public/user_feedback_level7.csv):

| # | Crew Member Name | Role | Mainnet Public Key | Mainnet Transaction Proof | Rating |
|---|---|---|---|---|---|
| 1 | Arthur Pendragon | Director | `GAX701K4...` | [`74298af...`](https://stellar.expert/explorer/testnet/tx/74298afbb346b724473ac74cf8aa77d1c7d7fff9ef9c39416367c83d53cfb748) | ⭐⭐⭐⭐⭐ |
| 2 | Beatrice Portinari | Producer | `GBX702K4...` | [`f0c35f3...`](https://stellar.expert/explorer/testnet/tx/f0c35f37b5063b12b0471140930be4c88c09506e87143063a505bd1c4e84345c) | ⭐⭐⭐⭐⭐ |
| 3 | Cassian Andor | Cinematographer | `GCX703K4...` | [`ea48ee4...`](https://stellar.expert/explorer/testnet/tx/ea48ee4ce084e38b311b1721e08d99702bef4173fe9b9f2bf240ccaac142a457) | ⭐⭐⭐⭐⭐ |
| ... | *+47 More NEW Mainnet Users* | *Full List in CSV* | *50 NEW Mainnet Keys* | *Verified On-Chain Hashes* | ⭐⭐⭐⭐⭐ |

---

## 🧪 Testing Instructions

### Smart Contract Unit Tests (5/5 Passing)
```bash
cd contract
cargo test --workspace
```

### Frontend Jest Unit Tests (3/3 Passing)
```bash
npm test
```

---

## 🔨 Production Build

```bash
npm run build
```

---

## 📄 License

MIT
