module.exports = {
  "parser": "babel-eslint",
  "env": {
      "browser": true,
      "commonjs": true,
      "es6": true
  },
  "extends": ['airbnb'],
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
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
      "indent": [
          "error",
          2
      ],
      "linebreak-style": 0,
      "quotes": [
          "error",
          "single"
      ],
      "semi": [
          "error",
          "never"
      ],
      "react/jsx-filename-extension": 0,
      "react/jsx-one-expression-per-line": 0,
      "react/prop-types": 0,
      "max-len": ["error", { "code": 500 }],
      "no-use-before-define": 0,
      "no-unused-expressions": 0,
      "import/prefer-default-export": 0,
      "react/jsx-closing-tag-location": 0,
      "react/jsx-curly-brace-presence": 0,
      "react/jsx-wrap-multilines": 0,
      "react/jsx-no-bind": 0,
      "consistent-return": 0,
      "global-require": 1,
      "react/no-array-index-key": 1,
      "react/destructuring-assignment": 1,
      "no-return-assign": 0,
      "no-underscore-dangle": 1,
      "no-confusing-arrow": 0,
      "curly": ["error", "multi"],
      "prefer-promise-reject-errors": 1,
      "object-curly-newline": ["error", {
        "ObjectExpression":{ "multiline": true, "minProperties": 3 },
        "ObjectPattern": { "multiline": true, "minProperties": 10 },
        "ImportDeclaration": "never",
        "ExportDeclaration": { "multiline": true, "minProperties": 10 }
    }]
  }
};