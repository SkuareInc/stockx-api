module.exports = {
  extends: ["airbnb-base", "airbnb-typescript/base"],
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: "*.js",
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "max-len": "off",
    "@typescript-eslint/naming-convention": "off",
    "react/require-default-props": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "max-classes-per-file": "off",
    "class-methods-use-this": "off"
  }
};
