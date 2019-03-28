module.exports = {
  resetMocks: true,
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.(tsx?)$': 'ts-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx', 'css', 'json'],
  testMatch: ['**/__tests__/**/*.test.ts?(x)'],
}
