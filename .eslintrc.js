module.exports = {
    root: true,
    env: {
        browser: true,
        amd: true,
        node: true,
        es6: true
    },
    extends : [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'next',
        'next/core-web-vitals'
    ],
    rules: {
        'semi': ['off', 'always'],
        'prettier/prettier': 0,
        "react/no-unescaped-entities": "off",
        "@next/next/no-page-custom-font": "off",
        "jsx-a11y/label-has-associated-control": "off",
        "jsx-a11y/label-has-for":"off",
    }
}

