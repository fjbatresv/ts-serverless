# TypeScript Serverless Template

![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-ff69b4.svg?style=for-the-badge&logo=prettier&logoColor=white)
![serverless](https://img.shields.io/badge/Serverless-red?style=for-the-badge&logo=serverless&logoColor=white)
![NodeJS 20](https://img.shields.io/badge/NODE%2020-green?style=for-the-badge&logo=nodedotjs&logoColor=white)
![License MIT](https://img.shields.io/badge/License%20-MIT-blue?style=for-the-badge)
![PRS Welcome](https://img.shields.io/badge/PRs%20-Welcome-green?style=for-the-badge)
![Gitmoji](https://img.shields.io/badge/😜%20😍%20Gitmoji-yellow?style=for-the-badge)
![Build status](https://img.shields.io/github/actions/workflow/status/fjbatresv/ts-serverless/build_test.yml?style=for-the-badge)

This project, named "ts-serverless," is a TypeScript-based serverless application designed for deployment on AWS using the Serverless Framework. It leverages various tools and configurations for development, testing, and code quality.

## Usage

To get started with the project, follow these steps:

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Run linting with `npm run lint`.
4. Run linting and fix with `npm run lint:fix`
5. Execute tests with `npm run test`.
6. Execute tests and generate coverage report with `npm run test:coverage`
7. Execute test for SonarQube analysis with `npm run test:sonar`
8. Execute SonarQube scan with: `npm run sonar:scan`
9. Execute SonarQube scan and tests with: `npm run sonar:all`
10. Run the application locally with: `serverless offline -s dev`

Feel free to adjust configurations and scripts based on your project requirements. For more detailed information, refer to individual configuration files and documentation for the used tools and frameworks.

## SonarCloud Status

[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=fjbatresv_ts-serverless&metric=bugs)](https://sonarcloud.io/summary/new_code?id=fjbatresv_ts-serverless)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=fjbatresv_ts-serverless&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=fjbatresv_ts-serverless)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=fjbatresv_ts-serverless&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=fjbatresv_ts-serverless)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=fjbatresv_ts-serverless&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=fjbatresv_ts-serverless)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=fjbatresv_ts-serverless&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=fjbatresv_ts-serverless)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=fjbatresv_ts-serverless&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=fjbatresv_ts-serverless)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=fjbatresv_ts-serverless&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=fjbatresv_ts-serverless)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=fjbatresv_ts-serverless&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=fjbatresv_ts-serverless)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=fjbatresv_ts-serverless&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=fjbatresv_ts-serverless)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=fjbatresv_ts-serverless&metric=coverage)](https://sonarcloud.io/summary/new_code?id=fjbatresv_ts-serverless)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=fjbatresv_ts-serverless&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=fjbatresv_ts-serverless)

## Table of Contents

1. [Project Structure](#project-structure)
2. [Configuration Details](#configuration-details)
   - [tsconfig.json](#tsconfigjson)
   - [package.json](#packagejson)
   - [.eslintrc.json](#eslintrcjson)
   - [.eslintignore](#eslintignore)
   - [.prettierrc.json](#prettierrcjson)
   - [.prettierignore](#prettierignore)
   - [jest.config.js](#jestconfigjs)
   - [jest.setup.ts](#jestsetupts)
   - [serverless.yml](#serverlessyml)
   - [sonarqube-scanner.js](#sonarqube-scannerjs)
   - [.vscode/extensions.json](#vscodeextensionsjson)
   - [.husky/pre-commit, .husky/prepare-commit-msg, .husky/pre-push](#husky-pre-commit-prepare-commit-msg-pre-push)
   - [.editorconfig](#editorconfig)

## Project Structure

The project follows a typical structure for a TypeScript-based serverless application. Key directories include:

- `src`: Contains the source code of the application.
- `dist`: Output directory for compiled TypeScript files.
- `node_modules`: Node.js modules and dependencies.
- `test`: Directory for test files.

## Configuration Details

### tsconfig.json

The TypeScript configuration file (`tsconfig.json`) sets up various compiler options and strict typing rules. Notable configurations include:

- Target ECMAScript 2019.
- Module system set to CommonJS.
- Strict type-checking enabled.
- ESLint integration and path mappings.

### package.json

The package.json file includes project metadata, dependencies, and scripts for various tasks. Key scripts include linting, testing, and deployment-related commands.

### .eslintrc.json

ESLint configuration file (`eslintrc.json`) defines rules for code linting with ESLint. It extends the Google JavaScript style guide and includes TypeScript-specific rules.

### .eslintignore

Specifies files and directories to be excluded from ESLint.

### .prettierrc.json

Prettier configuration file (`prettierrc.json`) defines code formatting rules, including single quotes, trailing commas, and indentation.

### .prettierignore

Excludes specified directories from Prettier formatting.

### jest.config.js

Jest configuration file (`jest.config.js`) sets up Jest for testing TypeScript files. It includes options for code coverage, file transformations, and test environment.

### jest.setup.ts

Jest setup file (`jest.setup.ts`) configures Jest-specific settings, such as test timeouts.

### serverless.yml

Serverless Framework configuration file (`serverless.yml`) defines AWS deployment settings. It includes serverless plugins, AWS provider details, function definitions, and other deployment-related configurations.

### sonarqube-scanner.js

Configuration file (`sonarqube-scanner.js`) for SonarQube code analysis. It specifies SonarQube server details, project settings, and file exclusions.

### .vscode/extensions.json

Visual Studio Code extensions recommendations file (`extensions.json`). It suggests various VS Code extensions for better development experience.

### husky-pre-commit, husky-prepare-commit-msg, husky-pre-push

Husky configuration files define Git hooks to run linting and testing before commits and pushes.

### .editorconfig

EditorConfig file (`editorconfig`) helps maintain consistent coding styles across different editors. It specifies settings such as indentation and character encoding.
