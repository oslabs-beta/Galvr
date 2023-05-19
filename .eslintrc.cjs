/* eslint-env node */
module.exports = {
    extends: ['eslint:recommended'],
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    root: true,
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],
            parserOptions: {
                project: ['./tsconfig.json'],
            },
        },
    ],
};
