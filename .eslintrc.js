module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-irregular-whitespace": 0,
    "no-prototype-builtins": 0,
    "prettier/prettier": [
      "warn",
      {
        formatOnSave: true,
        eslintIntegration: true,
        stylelintIntegration: true,
      },
    ],
  },
  parserOptions: {
    parser: "babel-eslint",
  },
};
