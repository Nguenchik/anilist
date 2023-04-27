<h1>Anime code challenge</h1>

<br />

# 🚀 Run project script


```
yarn
```

# 🚀 Available Scripts

In the project directory, you can run:

<br />

## ⚡️ development mode

```
yarn dev
```

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

<br />

## 🧪 test

```
yarn test
```

Launches unit test runner.

```
yarn test
```

Launches unit test runner.

```
yarn test:e2e:dev
```

Launches e2e test runner.

<br />

## 🦾 build prod 
```
yarn build
```

Builds the app for production to the `dist` folder.\
It correctly bundles Vue in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

<br />

```
yarn preview
```

To preview build version

## 🧶 lint

```
yarn lint
```

Running this command can dramatically improve ESLint's running time by ensuring that only changed files are linted.

<br />

## 🎯 format

```
yarn format
```

Checks if your files are formatted. This command will output a human-friendly message and a list of unformatted files, if any.

<br />

# 🧬 Project structure

This is the structure of the files in the project:

```sh
    │
    ├── cypress                 # e2e test files
    ├── src                     # source files
    │   ├── __tests__           # unit tests
    │   ├── assets              # images, constants and other static resources
    │   ├── components
    │   ├── grapgql             # graphql queries and mutations
    │   ├── plugins             # custom plugins (apollo, ...)
    │   ├── router              # routes settings
    │   ├── stores              # Pinia store
    │   │   ├── modules         # store's modules
    │   │   └── index.ts        # pinia config file
    │   ├── types               # data interfaces
    │   ├── utils               # utilities functions and custom components
    │   ├── views               
    │   ├── App.vue
    │   ├── main.ts
    ├── .eslintrc.cjs
    ├── .gitignore
    ├── .prettierrc
    ├── cypress.config.ts
    ├── env.d.ts
    ├── index.html
    ├── jest.config.json
    ├── package.json
    ├── package.lock.json
    ├── README.md
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── tsconfig.vitest.json
    ├── vite.config.ts
    ├── vitest.config.ts
    └── yarn.lock
```