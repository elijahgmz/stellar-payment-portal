# 📘 Technical Tutorial: Building Automated Revenue Distribution Contracts on Stellar Soroban
**Author**: FilmSplit Core Engineering Team  
**Level**: Advanced / Level 6 Ecosystem Guide  
**Stack**: Rust, `soroban-sdk v26`, React, `@creit.tech/stellar-wallets-kit`, `@stellar/stellar-sdk`

---

## Overview
In this technical tutorial, you will learn how to build a production-ready, trustless revenue distribution dApp on Stellar Soroban. We will cover:
1. Writing a Rust Soroban smart contract for basis-point allocations.
2. Emitting custom on-chain business events.
3. Connecting `@creit.tech/stellar-wallets-kit` in React.
4. Implementing Multi-Signature escrow approvals.

---

## Step 1: Rust Soroban Contract Architecture

Our contract defines a `Project` struct stored in persistent storage:

```rust
#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct Project {
    pub title: Bytes,
    pub collaborators: Vec<Address>,
    pub shares: Vec<u32>, // Basis points (must sum to 10,000)
    pub total_distributed: i128,
    pub is_disputed: bool,
    pub escrow_target: i128,
}
```

### Validating Basis-Point Shares (10,000 BPS = 100%)
Before registering a project or adding payees, verify total shares sum to 10,000:

```rust
let total: u32 = shares.iter().sum();
if total != 10_000 {
    panic_with_error!(&env, Error::TotalShareMismatch);
}
```

---

## Step 2: Atomic Payout Execution

When revenue is deposited, the contract calculates and routes exact shares atomically:

```rust
pub fn distribute_revenue(env: Env, project_id: Bytes, total_amount: i128) {
    let mut project: Project = env.storage().persistent().get(&project_id).unwrap();
    if project.is_disputed {
        panic_with_error!(&env, Error::ProjectDisputed);
    }

    project.total_distributed += total_amount;
    env.storage().persistent().set(&project_id, &project);

    // Emit event: rev_dist
    env.events().publish((symbol_short!("rev_dist"),), (project_id, total_amount));
}
```

---

## Step 3: Integrating `@creit.tech/stellar-wallets-kit` in React

To support Freighter, xBull, Albedo, and Rabet:

```typescript
import { StellarWalletsKit, WalletNetwork, allowAllModules } from "@creit.tech/stellar-wallets-kit";

const kit = new StellarWalletsKit({
  modules: allowAllModules(),
  network: WalletNetwork.TESTNET, // or WalletNetwork.PUBLIC for Mainnet
});

// Open Connect Modal
await kit.openModal({
  onWalletSelected: async (option) => {
    kit.setWallet(option.id);
    const { address } = await kit.getAddress();
    console.log("Connected:", address);
  },
});
```

---

## Step 4: Summary & Best Practices
- **Storage TTL**: Always ensure persistent keys are read/refreshed to keep them active in the ledger.
- **Type Safety**: Use explicit ScVal hints (`type: "u32"`, `type: "i128"`) when invoking Soroban contract functions from JS/TS.
- **Event Polling**: Query the Soroban RPC `getEvents` endpoint to show real-time live activity to users.
