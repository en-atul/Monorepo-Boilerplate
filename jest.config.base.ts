export default {
  preset: "ts-jest",
  roots: ["<rootDir>"],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(ts|js)x?$": "ts-jest"
  },
  collectCoverage: true,
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  coveragePathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/dist/", "<rootDir>/node_modules/"],
  coverageDirectory: "<rootDir>/coverage/",
  verbose: true
};
