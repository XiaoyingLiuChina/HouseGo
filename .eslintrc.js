module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "@vue/standard"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    quotes: [
      2,
      "single",
      {
        avoidEscape: false,
        allowTemplateLiterals: true,
      },
    ],
    semi: [2, "never"],
    "semi-spacing": [
      2,
      {
        before: false,
        after: true,
      },
    ],
  },
};
