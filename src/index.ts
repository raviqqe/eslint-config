import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";
import typescript, { type ConfigWithExtends } from "typescript-eslint";

const compat = new FlatCompat();

/* eslint-disable @typescript-eslint/naming-convention */

const configurations: ConfigWithExtends[] = [
  js.configs.recommended,
  prettierConfig,
  ...typescript.config(
    ...typescript.configs.recommended,
    ...typescript.configs.recommendedTypeChecked,
    ...typescript.configs.stylistic,
    ...typescript.configs.stylisticTypeChecked,
  ),
  ...compat.extends(
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/strict",
    // TODO Enable those plugins.
    // https://github.com/import-js/eslint-plugin-import/issues/2556
    // "plugin:import/errors",
    // "plugin:import/warnings",
    // "plugin:import/typescript",
    "plugin:eslint-comments/recommended",
  ),
  ...compat.plugins(
    "import",
    "react",
    "react-hooks",
    "jsx-a11y",
    "eslint-comments",
  ),
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parser: typescript.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: true,
        sourceType: "module",
      },
    },
    rules: {
      "@typescript-eslint/adjacent-overload-signatures": "error",
      "@typescript-eslint/array-type": "error",
      "@typescript-eslint/consistent-indexed-object-style": "error",
      "@typescript-eslint/consistent-type-assertions": "error",
      "@typescript-eslint/consistent-type-definitions": "error",
      "@typescript-eslint/consistent-type-exports": [
        "error",
        { fixMixedExportsWithInlineTypeSpecifier: true },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { disallowTypeAnnotations: false, fixStyle: "inline-type-imports" },
      ],
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
          format: ["camelCase"],
          leadingUnderscore: "allow",
          selector: "default",
        },
        {
          format: ["camelCase", "PascalCase", "UPPER_CASE"],
          leadingUnderscore: "allow",
          selector: "variable",
        },
        {
          format: ["camelCase", "PascalCase"],
          selector: "import",
        },
        {
          format: ["PascalCase"],
          selector: "enumMember",
        },
        {
          format: ["PascalCase"],
          selector: "typeLike",
        },
      ],
      "@typescript-eslint/no-base-to-string": "error",
      "@typescript-eslint/no-empty-interface": [
        "error",
        { allowSingleExtends: true },
      ],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-meaningless-void-operator": "error",
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
      "@typescript-eslint/no-useless-constructor": "error",
      "@typescript-eslint/no-useless-empty-export": "error",
      "@typescript-eslint/no-useless-template-literals": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/prefer-readonly": "error",
      "@typescript-eslint/prefer-return-this-type": "error",
      "@typescript-eslint/prefer-ts-expect-error": "error",
      "arrow-body-style": "error",
      curly: "error",
      "dot-notation": "error",
      "eslint-comments/no-unused-disable": "error",
      "import/extensions": [
        "error",
        "always",
        { jsx: "never", ts: "never", tsx: "never" },
      ],
      "import/no-cycle": "error",
      "import/no-default-export": "error",
      // TODO Enable this rule.
      // "import/no-named-as-default": "error",
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
      "prefer-arrow-callback": "error",
      quotes: [
        "error",
        "double",
        { allowTemplateLiterals: false, avoidEscape: true },
      ],
      "react-hooks/exhaustive-deps": "error",
      "react/jsx-boolean-value": "error",
      "react/jsx-curly-brace-presence": "error",
      "react/jsx-no-useless-fragment": "error",
      "react/jsx-sort-props": "error",
      "react/no-unescaped-entities": "off",
      "sort-keys": "error",
    },
    settings: {
      "import/resolver": {
        typescript: true,
      },
      react: {
        version: "detect",
      },
    },
  },
  {
    files: [
      "**/test.ts{,x}",
      "**/*.test.ts{,x}",
      "**/__tests__/*.ts{,x}",
      "**/test/**/*.ts{,x}",
    ],
    rules: {
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/require-await": "off",
      "@typescript-eslint/unbound-method": "off",
      "require-yield": "off",
    },
  },
];

/* eslint-enable @typescript-eslint/naming-convention */

// eslint-disable-next-line import/no-default-export
export default configurations;
