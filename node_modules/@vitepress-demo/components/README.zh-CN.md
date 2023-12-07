# Vitepress Demo

### Vitepress 组件演示插件

🌐 **中文** | [**English**](./README.md)

## 特性

### 原生风格

- 演示组件 `整体外观` 继承自原生 `极简` 风格
- `标题，描述，代码高亮` 均经过原生 `Markdown` 渲染

### 原生机制

- `Vitepress` 启动，向 `App` 中全局注册演示组件
- `Vite` 预处理期间，根据演示容器生成 `预览组件` 模组
- `Markdown` 渲染期间，将演示容器替换为 `演示组件`

## 安装

- #### 终端 npm

  ```sh
  npm i @vitepress-demo/plugins @vitepress-demo/components
  ```

- #### 配置 .vitepress/config.mts

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

- #### 配置 .vitepress/theme/index.ts

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

## 组件

| 名称                                         | 版本                                                                                                     |
| :------------------------------------------- | :------------------------------------------------------------------------------------------------------- |
| [@vitepress-demo/plugins](src/plugins)       | [![plugins version](https://badgen.net/npm/v/@vitepress-demo/plugins)](src/plugins/CHANGELOG.md)       |
| [@vitepress-demo/components](src/components) | [![components version](https://badgen.net/npm/v/@vitepress-demo/components)](src/components/CHANGELOG.md) |

## 许可

### MIT

#### Copyright (c) 2023 - present Crystal Platform
