module.exports = {
    extends: [
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'react/prop-types': 0,
        "react-hooks/rules-of-hooks": "error",
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    plugins: [
        "react-hooks"
    ]
};
