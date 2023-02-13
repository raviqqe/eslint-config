import { Linter } from "eslint";

const eslintConfig: Linter.Config = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "plugin:eslint-comments/recommended",
  ],
  overrides: [
    {
      files: [
        "**/*.test.ts{,x}",
        "**/__tests__/*.ts{,x}",
        "**/test/**/*.ts{,x}",
      ],
      rules: {
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/require-await": "off",
        "@typescript-eslint/unbound-method": "off",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    project: "tsconfig.json",
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "import",
    "prettier",
    "react",
    "react-hooks",
    "jsx-a11y",
    "eslint-comments",
  ],
  rules: {
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/consistent-type-definitions": "error",
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        accessibility: "explicit",
        overrides: {
          accessors: "explicit",
          constructors: "off",
          methods: "explicit",
          parameterProperties: "explicit",
          properties: "explicit",
        },
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        custom: { match: true, regex: "^I[A-Z]" },
        format: ["PascalCase"],
        selector: "interface",
      },
    ],
    "@typescript-eslint/no-empty-interface": [
      "error",
      { allowSingleExtends: true },
    ],
    "@typescript-eslint/no-misused-promises": [
      "error",
      { checksVoidReturn: { attributes: false, properties: false } },
    ],
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unnecessary-condition": [
      "error",
      { allowConstantLoopConditions: true },
    ],
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/prefer-readonly": "error",
    "arrow-body-style": "error",
    curly: "error",
    "dot-notation": "error",
    "import/no-cycle": "error",
    "import/no-default-export": "error",
    "import/no-named-as-default": "error",
    "import/no-unused-modules": "error",
    "import/order": ["error", { alphabetize: { order: "asc" } }],
    "lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true },
    ],
    "no-console": "error",
    "no-duplicate-imports": "error",
    "no-else-return": "error",
    "no-lonely-if": "error",
    "no-return-await": "error",
    "no-useless-return": "error",
    "object-shorthand": "error",
    quotes: [
      "error",
      "double",
      { allowTemplateLiterals: false, avoidEscape: true },
    ],
    "react/jsx-curly-brace-presence": "error",
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-sort-props": "error",
    "react/no-unescaped-entities": "off",
    "sort-keys": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};

module.exports = eslintConfig;
