# detect-create-package-manager

An NPM package that detects the package manager that's being used to run the `create` command that's commonly used to initialize new projects. It's useful to use the same package manager to install the dependencies right after creating the project.

## Install

```
npm install detect-create-package-manager
pnpm install detect-create-package-manager
yarn install detect-create-package-manager
```

## Usage

```ts
import detectCreatePackageManager from "detect-create-package-manager"

const packageManager = detectCreatePackageManager() // npm / yarn /pnpm
```
