# detect-create-package-manager

An NPM package that detects the package manager that's being used to run a create workflow.

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