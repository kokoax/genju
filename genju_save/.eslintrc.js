module.exports = {
    "env": {
        "browser": true,
        "es6": true,
    },
    "extends": ["eslint:recommended", "react:recommended"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
      "react/jsx-uses-vars": 1,
      "indent": ["error", 4],
      "linebreak-style": ["error", "unix"],
      "semi": ["error", "always"],
      "quotes": ["error", "single"]
    }
};
