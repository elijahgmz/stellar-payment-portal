module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@creit.tech/stellar-wallets-kit$': '<rootDir>/src/__mocks__/stellar-wallets-kit-sdk.ts',
    '^@creit.tech/stellar-wallets-kit/sdk$': '<rootDir>/src/__mocks__/stellar-wallets-kit-sdk.ts',
    '^@creit.tech/stellar-wallets-kit/modules/utils$': '<rootDir>/src/__mocks__/stellar-wallets-kit-utils.ts',
    '^@creit.tech/stellar-wallets-kit/types$': '<rootDir>/src/__mocks__/stellar-wallets-kit-types.ts',
  },
  setupFilesAfterEnv: [],
};
