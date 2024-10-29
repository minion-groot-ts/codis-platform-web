/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@codis/eslint-config/nextui.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
