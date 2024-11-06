// @ts-check
import typescriptEslint from '@typescript-eslint/eslint-plugin';

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      typescriptEslint,
    },
  },
);
