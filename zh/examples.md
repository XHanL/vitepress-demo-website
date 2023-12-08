---
outline: deep
---

# 示例

两种用法

## 相对路径

::: demo 尺寸 | 下列尺寸分别为 `large`, `middle`, `small`, `24px`
demo/IconSize.vue
:::

#### 对应格式

```md
::: demo 尺寸 | 下列尺寸分别为 `large`, `middle`, `small`, `24px`
demo/IconSize.vue
:::
```

## 代码围栏

::: demo _颜色_ | 为 **图标** 指定一种 **_`颜色`_**

```vue
<template>
  <Space>
    <Icon color="turquoise"> <!-- [!code focus] -->
      <ArrowCircleRight />
    </Icon>
    <Icon color="#d0d080"> <!-- [!code focus] -->
      <ArrowCircleRight />
    </Icon>
  </Space>
</template>

<script setup lang="ts">
import Icon from "../components/Icon.vue"; // [!code focus]
import Space from "../components/Space.vue";
import ArrowCircleRight from "../icons/ArrowCircleRight.vue";
</script>
```

:::

#### 对应格式

````md
::: demo _颜色_ | 为 **图标** 指定一种 **_`颜色`_**

```vue
<template>
  <Space>
    <Icon color="turquoise"> <!-- 替换为聚焦注释 -->
      <ArrowCircleRight />
    </Icon>
    <Icon color="#d0d080"> <!-- 替换为聚焦注释 -->
      <ArrowCircleRight />
    </Icon>
  </Space>
</template>

<script setup lang="ts">
import Icon from "../components/Icon.vue"; // 替换为聚焦注释
import Space from "../components/Space.vue";
import ArrowCircleRight from "../icons/ArrowCircleRight.vue";
</script>
```

:::
````

## 信息

::: tip 代码聚焦

- **`<script>`** 注释格式为 **`// [!code focus]`**
- **`<template>`** 注释格式为 **`<!-- [!code focus] -->`**
- 深入了解 Vitepress 的 [Focus in Code Blocks](https://vitepress.dev/guide/markdown#focus-in-code-blocks)

:::

::: warning 局限性
**Demo** 作为一种顶层容器，无法与其它容器嵌套
:::
