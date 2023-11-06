# Trainning
1. Setup nextjs & pnpm
npm install -g pnpm

pnpx create-next-app@latest nextjs

2. Setup libraries
- install husky pnpm i -D husky lint-staged prettier
- add to package.json
    "prepare": "husky install",
    pnpm run prepare
    chmod ug+x .husky/*
    touch .husky/commit-msg
    ```
    #!/bin/sh
    . "$(dirname "$0")/_/husky.sh"

    cd "$(dirname "$0")/.." && npx --no -- commitlint --edit $1
    ```

    touch .husky/pre-commit
    ```
    #!/bin/sh
    . "$(dirname "$0")/_/husky.sh"
    cd "$(dirname "$0")/.." && npx lint-staged --concurrent false
    ```
3. Config typescript, eslint
    pnpm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb eslint-config-airbnb-typescript eslint-config-next eslint-config-prettier eslint-plugin-import eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-simple-import-sort eslint-plugin-unused-imports

    vim eslint.json
    ```
   {
        "extends": [
            "airbnb-base",
            "next/core-web-vitals",
            "plugin:prettier/recommended"
        ],
        "rules": {
            "prettier/prettier": [
            "error",
            {
                "singleQuote": true,
                "endOfLine": "auto"
            }
            ]
        },
        "overrides": [
            {
            "files": ["**/*.ts", "**/*.tsx"],
            "plugins": [
                "@typescript-eslint",
                "unused-imports",
                // "tailwindcss",
                "simple-import-sort"
            ],
            "extends": [
                // "plugin:tailwindcss/recommended",
                "airbnb",
                "airbnb-typescript",
                "next/core-web-vitals",
                "plugin:prettier/recommended"
            ],
            "parserOptions": {
                "project": "./tsconfig.json"
            },
            "rules": {
                "prettier/prettier": [
                "error",
                {
                    "singleQuote": true,
                    "endOfLine": "auto"
                }
                ],
                "import/extensions": "off",
                "react/function-component-definition": "off",
                "react/destructuring-assignment": "off",
                "react/require-default-props": "off",
                "react/jsx-props-no-spreading": "off",
                "@typescript-eslint/comma-dangle": "off",
                "@typescript-eslint/consistent-type-imports": "error",
                "no-restricted-syntax": [
                "error",
                "ForInStatement",
                "LabeledStatement",
                "WithStatement"
                ],
                "import/prefer-default-export": "off",
                "simple-import-sort/imports": "error",
                "simple-import-sort/exports": "error",
                "import/order": "off",
                "@typescript-eslint/no-unused-vars": "off",
                "unused-imports/no-unused-imports": "error",
                "unused-imports/no-unused-vars": [
                "error",
                { "argsIgnorePattern": "^_" }
                ]
            }
            }
        ]
        }
    ```

    touch .eslintignore
    ```
    node_modules
    out
    build
    dist
    ```

    add script to package.json
    ```
    "format": "next lint --fix && prettier '**/*.{json,yaml}' --write --ignore-path .gitignore",
    "check-types": "tsc --noEmit --pretty",
    ```

    vim ts.config
    ```
    
        {
        "compilerOptions": {
            "lib": ["dom", "dom.iterable", "esnext"],
            "module": "esnext",
            "moduleResolution": "node",
            "resolveJsonModule": true,
            "removeComments": true,
            "preserveConstEnums": true,
            "strict": true,
            "alwaysStrict": true,
            "strictNullChecks": true,
            "noUncheckedIndexedAccess": true,

            "noImplicitAny": true,
            "noImplicitReturns": true,
            "noImplicitThis": true,
            "noUnusedLocals": true,
            "noUnusedParameters": true,
            "allowUnreachableCode": false,
            "noFallthroughCasesInSwitch": true,

            "target": "es2017",
            "outDir": "out",
            "declaration": true,
            "sourceMap": true,

            "esModuleInterop": true,
            "allowSyntheticDefaultImports": true,
            "allowJs": true,
            "checkJs": true,
            "skipLibCheck": true,
            "forceConsistentCasingInFileNames": true,

            "jsx": "preserve",
            "noEmit": true,
            "isolatedModules": true,
            "incremental": true,

            "baseUrl": ".",
            "paths": {
            "@/*": ["./src/*"],
            "@/public/*": ["./public/*"]
            },
            "plugins": [
            {
                "name": "next"
            }
            ]
        },
        "exclude": ["./out/**/*", "./node_modules/**/*"],
        "include": [
            "next-env.d.ts",
            "**/*.ts",
            "**/*.tsx",
            ".next/types/**/*.ts",
        ]
        }
    ```

4. Setup commit 
    pnpm i -D @commitlint/cli @commitlint/config-conventional @commitlint/cz-commitlint commitizen 

    add config to package.json

    ```
    "config": {
        "commitizen": {
        "path": "@commitlint/cz-commitlint"
        }
    },
    ```

    add scripts
    ```
    "commit": "cz",
    ```

    touch lint-staged.config.js
    ```
    module.exports = {
    '*.{js,jsx,ts,tsx}': ['eslint --fix', 'eslint'],
    '**/*.ts?(x)': () => 'npm run check-types',
    '*.{json,yaml}': ['prettier --write'],
    };
    ```

    touch commitlint.config.js
    ```
    module.exports = { extends: ['@commitlint/config-conventional'] };
    ```