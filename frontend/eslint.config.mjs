import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import typescriptEslint from 'typescript-eslint';
import importSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports'


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {typescriptEslint, importSort, unusedImports}
  },
  {
    rules: {
      'no-unused-vars': 'off',
      'no-console': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'react/no-unescaped-entities': 'off',
      'react/display-name': 'off',
      "react/react-in-jsx-scope": "off",

    }
  }
];