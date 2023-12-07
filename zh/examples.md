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
    <Icon color="turquoise">
      <ArrowCircleRight />
    </Icon>
    <Icon color="#d0d080">
      <ArrowCircleRight />
    </Icon>
  </Space>
</template>

<script setup lang="ts">
import Icon from "../components/Icon.vue";
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
    <Icon color="turquoise">
      <ArrowCircleRight />
    </Icon>
    <Icon color="#d0d080">
      <ArrowCircleRight />
    </Icon>
  </Space>
</template>

<script setup lang="ts">
import Icon from "../components/Icon.vue";
import Space from "../components/Space.vue";
import ArrowCircleRight from "../icons/ArrowCircleRight.vue";
</script>
```

:::
````

## 注意

::: warning 局限性
**Demo** 作为一种顶层容器，无法与其它容器嵌套
:::
