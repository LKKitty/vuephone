module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:prettier/recommended",
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
  rules: {
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unused-vars": "off",
    "no-undef": "off",
    "no-empty": "warn",
    "prettier/prettier": "warn",
    "no-fallthrough": "off"
  }
};
