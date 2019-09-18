module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "jest": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [".js", ".jsx"]
            }
        ],
        "react/prop-types": 0,
        "no-underscore-dangle": 0,
        "react/require-default-props": "off",
        "react/destructuring-assignment": "off"
    },
    "settings": {
        "react": {
            "version": "detect",
        },
    },
};