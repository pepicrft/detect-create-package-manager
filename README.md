# detect-create-package-manager

[![GitHub issues](https://img.shields.io/github/issues/gestaltjs/detect-create-package-manager)](https://github.com/gestaltjs/detect-create-package-manager/issues)
[![GitHub forks](https://img.shields.io/github/forks/gestaltjs/detect-create-package-manager)](https://github.com/gestaltjs/detect-create-package-manager/network)
[![GitHub stars](https://img.shields.io/github/stars/gestaltjs/detect-create-package-manager)](https://github.com/gestaltjs/detect-create-package-manager/stargazers)
[![GitHub license](https://img.shields.io/github/license/gestaltjs/detect-create-package-manager)](https://github.com/gestaltjs/detect-create-package-manager/blob/main/LICENSE)

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
