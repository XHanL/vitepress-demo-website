---
outline: deep
---

# 示例

两种用法

## 相对路径

::: demo 尺寸 | 下列尺寸分别为 `large`, `middle`, `small`, `24px`
demo/IconSize.vue
:::

```md
::: demo 尺寸 | 下列尺寸分别为 `large`, `middle`, `small`, `24px`
demo/IconSize.vue
:::
```

## 代码围栏

::: demo _颜色_ | 为 **图标** 指定一种 **_`颜色`_**

```vue
<template>
  <CrSpace>
    <CrIcon color="turquoise" /> <!-- [!code focus:2] -->
    <CrIcon color="#d0d080" />
  </CrSpace>
</template>

<script setup lang="ts">
import CrIcon from "../components/CrIcon.vue"; // [!code focus]
import CrSpace from "../components/CrSpace.vue";
</script>
```

:::

````md
::: demo _颜色_ | 为 **图标** 指定一种 **_`颜色`_**

```vue
<template>
  <CrSpace>
    <CrIcon color="turquoise" /> <!-- 替换为聚焦注释 -->
    <CrIcon color="#d0d080" />
  </CrSpace>
</template>

<script setup lang="ts">
import CrIcon from "../components/CrIcon.vue"; // 替换为聚焦注释
import CrSpace from "../components/CrSpace.vue";
</script>
```

:::
````

## 提示

::: warning 局限性
**Demo** 作为一种顶层容器，无法与其它容器嵌套
:::

::: tip 代码聚焦

- **`<script>`** 注释格式为 **`// [!code focus]`**
- **`<template>`** 注释格式为 **`<!-- [!code focus] -->`**
- 深入了解 Vitepress 的 [Focus in Code Blocks](https://vitepress.dev/guide/markdown#focus-in-code-blocks)

:::
