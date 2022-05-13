/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
import base from "./jest.config.base";

export default {
  ...base,
  setupFilesAfterEnv: ["./jest.setup.js"],
  projects: ["<rootDir>/packages/website", "<rootDir>/packages/components", "<rootDir>/packages/core"]
};
