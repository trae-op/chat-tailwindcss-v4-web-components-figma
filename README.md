## Getting Started

Open your terminal in (windows/mac/linux) and run this commands:

```bash
npm create vite@latest my-web-components-project
yarn init -y
yarn add typescript lite-server -D
npx tsc --init
```

Next step, you have to replace this code in the file `tsconfig.json`

```
{
  "compilerOptions": {
    "target": "ES6",
    "module": "ESNext",
    "moduleResolution": "Node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"]
}
```

Next step, run this commands:

```bash
yarn add prettier -D
yarn add prettier-plugin-html-template-literals -D
yarn add tailwindcss @tailwindcss/cli
```

Next step, you should install plugins to your VS Code `Tailwind CSS IntelliSense`, `Tailwind Sorter`, `Web Components Snippets`, `Prettier - Code formatter`

Next step, run this commands:

```
"scripts": {
  "build": "tsc",
  "tailwind-watch": "npx @tailwindcss/cli -i ./src/css/input.css -o ./tailwind-dist/output.css --minify --watch",
  "start": "yarn tailwind-watch && build && lite-server"
}
```

Next step, you should create a file `src/css/input.css` and add a string `@import "tailwindcss";`

You have a project structure like this:

```
web-components-ts/
├── src/
│   ├── components/
│   │   └── my-element.js
│   └── css/
│   │   └── input.css
│   ├── index.html
│   └── main.js
├── tsconfig.json
├── package.json
└── bs-config.json
```
