# React-Vite-Starter

<div align="center">
  <img src="https://github.com/user-attachments/assets/0b478e1f-c25d-4963-bb20-4df192901768" alt="evZ0KX" width="600"/>
</div>

## About the Project

This project is a starter template for building React applications using Vite.
It includes a set of tools and configurations to help you get started quickly
with modern web development practices.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server.
- **TypeScript**: A typed superset of JavaScript that compiles to plain
  JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **ESLint**: A tool for identifying and fixing problems in JavaScript code.
- **Prettier**: An opinionated code formatter.
- **Vitest**: A Vite-native unit test framework.

## Features

- Fast development server with hot module replacement.
- TypeScript support.
- Tailwind CSS for styling.
- Pre-configured ESLint and Prettier for code quality and formatting.
- Unit testing with Vitest.
- Commit linting and conventional commits with Commitizen and Husky.

## Installation

To get started with this project, follow these steps:

1. **Clone the repository**:

   ```sh
   git clone https://github.com/xfathurrahman/react-vite-starter.git
   cd react-vite-starter
   ```

2. **Install dependencies using Bun**:
   ```sh
   bun install
   ```

## Available Commands

Here are some useful commands you can run:

- **Start the development server**:

  ```sh
  bun dev
  ```

  Starts the Vite development server with hot module replacement.

- **Build the project for production**:

  ```sh
  bun build
  ```

  Builds the project for production, including TypeScript compilation and Vite
  bundling.

- **Preview the production build**:

  ```sh
  bun preview
  ```

  Previews the production build locally.

- **Run unit tests**:

  ```sh
  bun test:unit
  ```

  Runs unit tests using Vitest.

- **Run unit tests with UI and coverage**:

  ```sh
  bun test:ui
  ```

  Runs unit tests with a UI and generates coverage reports.

- **Run unit tests for CI with coverage**:

  ```sh
  bun test:ci
  ```

  Runs unit tests suitable for continuous integration environments with coverage
  reports.

- **Format code**:

  ```sh
  bun format:fix
  ```

  Formats the code using Prettier.

- **Check code formatting**:

  ```sh
  bun format:check
  ```

  Checks the code formatting using Prettier without making changes.

- **Lint code**:

  ```sh
  bun lint
  ```

  Lints the code using ESLint.

- **Fix linting issues**:

  ```sh
  bun lint:fix
  ```

  Fixes linting issues using ESLint.

- **Create a new release**:

  ```sh
  bun release
  ```

  Creates a new release using `standard-version`.

- **Clean the project**:
  ```sh
  bun clean
  ```
  Cleans the project by removing generated files and directories like `dist`,
  `node_modules`, and `coverage`.
