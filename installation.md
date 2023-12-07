# Installation

Three steps

## Terminal

```sh
npm i @vitepress-demo/plugins @vitepress-demo/components
```

## Configure .vitepress/config.mts

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

## Configure .vitepress/theme/index.ts

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
