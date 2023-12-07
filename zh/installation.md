# 安装

三步安装

## 终端 npm

```sh
npm i @vitepress-demo/plugins @vitepress-demo/components
```

## 配置 .vitepress/config.mts

```ts
import { defineConfig } from "vitepress";
import { demoMarkdownPlugin, demoVitePlugin } from "@vitepress-demo/plugins";

export default defineConfig({
  // 其它配置...
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

## 配置 .vitepress/theme/index.ts

```ts
// 其它导入...
import { Demo } from "@vitepress-demo/components";

export default {
  // 其它配置...
  enhanceApp({ app, router, siteData }) {
    app.component("Demo", Demo);
  },
} satisfies Theme;
```
