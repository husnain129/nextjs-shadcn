# Next.js Project with Tailwind CSS and Shadcn Package

This project uses **Tailwind CSS** in combination with the **Shadcn** package for styling.

## Getting Started

To get started with this project, follow these steps:

### Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) installed on your system.

### Installation

1. Clone this repository to your local machine:

```
git clone https://github.com/husnain129/nextjs-shadcn
```

2. Change into the project directory:

```
cd nextjs-shadcn
```

3. Install project dependencies using **Yarn** (make sure you have Yarn installed):

```
yarn install
```

### Husky Setup

This project includes **Husky** for pre-commit hooks. To enable Husky, follow these steps:

1. Install Husky:

```
yarn add husky
```

2. Run the prepare script:

```
yarn prepare
```

3. Make Husky and Git hooks executable by running the following command in your terminal:

```
chmod ug+x .husky/* && chmod ug+x .git/hooks/*
```

### Commitlint Configuration

The project includes a `commitlint.config.js` file, which defines the rules for commit messages. Please adhere to these rules when writing commit messages to maintain a consistent and clean commit history.

## Usage

Feel free to modify and expand upon this project to build your Next.js application with Tailwind CSS and Shadcn.

## License

This project is licensed under the MIT License. For full license details, see the [LICENSE](LICENSE) file.
