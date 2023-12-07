import { defineConfig } from "vitepress";

import { demoMarkdownPlugin, demoVitePlugin } from "@vitepress-demo/plugins";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "",
  title: "Vitepress Demo",
  locales: {
    root: {
      label: "English",
      lang: "en-US",
      description: "Demo Plugin for Vitepress",
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: "Home", link: "/" },
          { text: "Installation", link: "/installation" },
          { text: "Examples", link: "/examples" },
        ],
        sidebar: [
          { text: "Installation", link: "/installation" },
          { text: "Examples", link: "/examples" },
        ],
        socialLinks: [
          { icon: "github", link: "https://github.com/XHanL/vitepress-demo" },
        ],
      },
    },
    zh: {
      label: "简体中文",
      lang: "zh-CN",
      description: "Vitepress 的组件演示插件",
      themeConfig: {
        nav: [
          { text: "主页", link: "/zh/" },
          { text: "安装", link: "/zh/installation" },
          { text: "示例", link: "/zh/examples" },
        ],
        sidebar: [
          { text: "安装", link: "/zh/installation" },
          { text: "示例", link: "/zh/examples" },
        ],
        socialLinks: [
          { icon: "github", link: "https://github.com/XHanL/vitepress-demo" },
        ],
      },
    },
  },

  markdown: {
    config: (md) => {
      md.use(demoMarkdownPlugin);
    },
  },
  vite: {
    plugins: [demoVitePlugin()],
  },
});
