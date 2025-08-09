import js from "@eslint/js";
// @ts-expect-error missing types
import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import importX from "eslint-plugin-import-x";
import perfectionist from "eslint-plugin-perfectionist";
// @ts-expect-error missing types
import reactJsxRuntime from "eslint-plugin-react/configs/jsx-runtime.js";
// @ts-expect-error missing types
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import globals from "globals";
import typescript, { type ConfigWithExtends } from "typescript-eslint";

/* eslint-disable @typescript-eslint/naming-convention */

const configurations: ConfigWithExtends[] = [
  js.configs.recommended,
  (comments as { recommended: ConfigWithExtends }).recommended,
  reactRecommended as ConfigWithExtends,
  reactJsxRuntime as ConfigWithExtends,
  importX.flatConfigs.errors,
  importX.flatConfigs.warnings,
  importX.flatConfigs.typescript,
  perfectionist.configs["recommended-natural"],
  ...typescript.config(
    ...typescript.configs.recommended,
    ...typescript.configs.recommendedTypeChecked,
    ...typescript.configs.stylistic,
    ...typescript.configs.stylisticTypeChecked,
  ),
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2025,
      },
      parser: typescript.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: true,
        sourceType: "module",
      },
    },
    rules: {
      "@eslint-community/eslint-comments/no-unused-disable": "error",
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
      "@typescript-eslint/no-unnecessary-template-expression": "error",
      "@typescript-eslint/no-unnecessary-type-arguments": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-useless-constructor": "error",
      "@typescript-eslint/no-useless-empty-export": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/prefer-readonly": "error",
      "@typescript-eslint/prefer-return-this-type": "error",
      "@typescript-eslint/prefer-ts-expect-error": "error",
      "arrow-body-style": "error",
      curly: "error",
      "dot-notation": "error",
      "import-x/default": "off",
      "import-x/extensions": [
        "off",
        "always",
        { jsx: "never", ts: "never", tsx: "never" },
      ],
      "import-x/namespace": "off",
      "import-x/no-cycle": "error",
      "import-x/no-default-export": "error",
      "import-x/no-named-as-default": "off",
      "import-x/no-named-as-default-member": "off",
      "import-x/no-rename-default": "off",
      "import-x/no-unused-modules": "error",
      "import-x/order": ["error", { alphabetize: { order: "asc" } }],
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
      "perfectionist/sort-classes": "off",
      "perfectionist/sort-imports": "off",
      "perfectionist/sort-union-types": [
        "error",
        {
          groups: ["unknown", "nullish"],
          ignoreCase: true,
          type: "natural",
        },
      ],
      "prefer-arrow-callback": "error",
      quotes: [
        "error",
        "double",
        { allowTemplateLiterals: false, avoidEscape: true },
      ],
      "react/jsx-boolean-value": "error",
      "react/jsx-curly-brace-presence": "error",
      "react/jsx-no-useless-fragment": "error",
      "react/no-unescaped-entities": "off",
      "sort-keys": ["error", "asc", { caseSensitive: false, natural: true }],
    },
    settings: {
      "import-x/resolver-next": [createTypeScriptImportResolver()],
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
  {
    files: ["**/*.config.{js,ts}"],
    rules: {
      "import-x/no-default-export": "off",
    },
  },
  {
    ignores: ["build", "coverage", "dist"],
  },
];

/* eslint-enable @typescript-eslint/naming-convention */

// eslint-disable-next-line import-x/no-default-export
export default configurations;
