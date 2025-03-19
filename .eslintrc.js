/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "next",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
    "plugin:storybook/recommended",
  ],
  parserOptions: {
    project: ["tsconfig.json"],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: [
    "build/",
    "dist/",
    "node_modules/",
    "*.js",
    "*.jsx",
    "src/generated/",
  ],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/require-await": "off",
  },
};
