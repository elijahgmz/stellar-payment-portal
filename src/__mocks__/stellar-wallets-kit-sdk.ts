export const StellarWalletsKit = jest.fn().mockImplementation(() => ({
  openModal: jest.fn().mockImplementation(async ({ onWalletSelected }) => {
    if (onWalletSelected) {
      await onWalletSelected({ id: "freighter", name: "Freighter" });
    }
  }),
  setWallet: jest.fn(),
  getAddress: jest.fn().mockResolvedValue({ address: "GABQLXV2LTQYM6RJ56U4F7COWUQ3GCEQBBCRBM6GGT3JCDOQA72NWFN" }),
  signTransaction: jest.fn().mockResolvedValue({ signedTxXdr: "AAAA...MOCK_XDR..." }),
}));

export const WalletNetwork = {
  TESTNET: "Test SDF Network ; September 2015",
  PUBLIC: "Public Global Stellar Network ; September 2015",
};

export const allowAllModules = jest.fn().mockReturnValue([]);
