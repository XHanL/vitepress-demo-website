# Vitepress Demo

### Component Demo Plugin for Vitepress

🌐 **English** | [**中文**](./README.zh-CN.md)

## Feature

### Native Style

- The demo component `overall appearance` inherits from the native `minimalist` style
- The demo component `title, description, highlighting` are rendered through native `Markdown`

### Native Mechanism

- `Vitepress` starts, globally registers the demo component in `App`
- During `Vite` preprocessing, the `preview component` module is generated based on the demo container
- During `Markdown` rendering, the demo container is replaced with the `demo component`

## Installation

- ### Terminal

  ```sh
  npm i @vitepress-demo/plugins @vitepress-demo/components
  ```

- ### Configure .vitepress/config.mts

  ```ts
  import { defineConfig } from "vitepress";
  import { demoMarkdownPlugin, demoVitePlugin } from "@vitepress-demo/plugins";

  export default defineConfig({
    // other configs...
    markdown: {
      config(md) {
        md.use(demoMarkdownPlugin);
      },
    },
    vite: {
      plugins: [demoVitePlugin()],
    },
  });
  ```

- ### Configure .vitepress/theme/index.ts

  ```ts
  // other imports...
  import { Demo } from "@vitepress-demo/components";

  export default {
    // other configs...
    enhanceApp({ app, router, siteData }) {
      app.component("Demo", Demo);
    },
  } satisfies Theme;
  ```

## Packages

| Name                                         | Version                                                                                                   |
| :------------------------------------------- | :-------------------------------------------------------------------------------------------------------- |
| [@vitepress-demo/plugins](src/plugins)       | [![plugins version](https://badgen.net/npm/v/@vitepress-demo/plugins)](src/plugins/CHANGELOG.md)          |
| [@vitepress-demo/components](src/components) | [![components version](https://badgen.net/npm/v/@vitepress-demo/components)](src/components/CHANGELOG.md) |

## License

### MIT

#### Copyright (c) 2023 - present Crystal Platform
