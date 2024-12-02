# React Tailwind Converter

**Version:** 1.0.89

## Description

`react-tailwind-converter` is a utility package that allows developers to style React components using props, instead of adding Tailwind CSS classes directly. This enables a more structured and consistent approach to component styling in projects, particularly within a monorepo setup.

This package includes support for dynamic class generation, a predefined color system, and a configurable safe list of classes. It’s especially useful for teams looking to streamline their Tailwind usage in a React environment.

## Features

- **Prop-Based Styling**: Pass Tailwind-compatible styles as props to components, making them more readable and maintainable.
- **Color Tokens**: Use predefined colors to ensure consistency across your components.
- **Safe List Generation**: Dynamically generates and extends Tailwind’s safe list to avoid purging necessary styles.
- **Box Component**: A flexible `Box` component that leverages Tailwind CSS through prop-based styling.

## Installation

Install the package via npm or yarn:

```bash
npm install react-tailwind-converter
# or
yarn add react-tailwind-converter
```

## Usage

### Basic Usage

The package exports a styled `Box` component that you can use in your React application.

Here’s a quick example:

```jsx
import { Box } from "react-tailwind-converter";

function App() {
  return (
    <Box
      mt="16"
      mb="8"
      ml={{ xs: "80", lg: "32" }}
      borderRadius="3xl"
      padding="20"
      borderWidth="4"
      borderColor="danger-400"
      textColor="black"
      bgc="warning-500"
      borderStyle="solid"
    >
      Testing Box
    </Box>
  );
}
```


## Tailwind Configuration

In your `tailwind.config.js`, import the `safeList` and `colorMap` and add them as follows:

```js
import type { Config } from "tailwindcss";
import { safeList } from "react-tailwind-converter";
import { colorMap } from "react-tailwind-converter";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: safeList(),
  theme: {
    extend: {
      colors: colorMap,
      screens: {
        xs: '0px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
} satisfies Config;

```

## Available Components

### Box

A flexible container component with prop-based styling.

```jsx
import { Box } from "react-tailwind-converter";

<Box padding="10" bgc="primary-500" borderRadius="lg">
  Content goes here
</Box>
```

## Color Configuration

The package provides two ways to configure your colors:

### 1. Using Default Colors (Inspired by NextUI)

The simplest way is to use our default color tokens (inspired by NextUI's color system):

```js
import type { Config } from "tailwindcss";
import { safeList, colorMap } from "react-tailwind-converter";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: safeList(),
  theme: {
    colors: colorMap,  // Uses our default color system
  },
  plugins: [],
} satisfies Config;
```

### 2. Custom Colors

You can define your own colors, but you must maintain the same token structure. Your colors object needs to include these specific keys:

```js
import type { Config } from "tailwindcss";
import { safeList } from "react-tailwind-converter";  // Don't import colorMap when using custom colors

export default {
  content: [...],
  safelist: safeList(),
  theme: {
    colors: {
      // Required base colors
      background: string,      // e.g., '#FFFFFF'
      foreground: string,      
      white: string,
      black: string,
      transparent: string,
      divider: string,
      focus: string,
      'content-1': string,
      'content-2': string,
      'content-3': string,
      'content-4': string,
      whiteTransparent: string,
      backgroundOneLight: string,
      backgroundTwoLight: string,
      backgroundOneDark: string,
      backgroundTwoDark: string,

      // Required color scales (must include 50-900)
      primary: {
        50: string,
        100: string,
        // ... through 900
      },
      default: {
        // same structure as primary
      },
      success: {
        // same structure as primary
      },
      warning: {
        // same structure as primary
      },
      danger: {
        // same structure as primary
      }
    }
  },
  plugins: [],
} satisfies Config;
```

For example, you could use different color values while maintaining the structure:

```js
theme: {
  colors: {
    background: 'peachpuff',
    primary: {
      50: '#your-color',
      100: '#your-color',
      // ... etc
    },
    // ... other required tokens
  }
}
```

The Box component will use these color tokens via props like `bgc="primary-500"` or `textColor="danger-200"`.

## Development

1. Clone the repo
2. Install dependencies
3. Run `pnpm dev` to start the dev environment

### Publishing
The package is automatically published to NPM when changes are pushed to the main branch. Remember to update the version in `package.json` and here before pushing.
