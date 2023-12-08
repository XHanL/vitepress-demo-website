---
outline: deep
---

# Examples

Two of use

## Relative path

::: demo Size | The following sizes are `large`, `middle`, `small`, `24px`
demo/IconSize.vue
:::

#### Format

```md
::: demo Size | The following sizes are `large`, `middle`, `small`, `24px`
demo/IconSize.vue
:::
```

## Code fence

::: demo _Color_ | Specify a **_`color`_** for the **icon**

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
import Icon from "./components/Icon.vue"; // [!code focus]
import Space from "./components/Space.vue";
import ArrowCircleRight from "./icons/ArrowCircleRight.vue";
</script>
```

:::

#### Format

````md
::: demo _Color_ | Specify a **_`color`_** for the **icon**

```vue
<template>
  <Space>
    <Icon color="turquoise"> <!-- Put code focus here -->
      <ArrowCircleRight />
    </Icon>
    <Icon color="#d0d080"> <!-- Put code focus here -->
      <ArrowCircleRight />
    </Icon>
  </Space>
</template>

<script setup lang="ts">
import Icon from "./components/Icon.vue"; // Put code focus here
import Space from "./components/Space.vue";
import ArrowCircleRight from "./icons/ArrowCircleRight.vue";
</script>
```

:::
````

## Infos

::: tip Code Focus
- **`<script>`** comment format is **`// [!code focu`**
- **`<template>`** comment format is **`<!-- [!code focus] -->`**
- Learn more at vitepress [Focus in Code Blocks](https://vitepress.dev/guide/markdown#focus-in-code-blocks)

:::

::: warning Limitations
**Demo** as a top-level container, cannot be nested with other containers
:::
