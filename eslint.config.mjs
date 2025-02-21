import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = tseslint.config(
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    pluginJs.configs.recommended,
    tseslint.configs.strict,
    tseslint.configs.stylistic,
    eslintPluginUnicorn.configs.recommended,
    // Leave last
    eslintConfigPrettier,
);

export default eslintConfig;
