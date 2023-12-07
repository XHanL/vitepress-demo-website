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
    <Icon color="turquoise">
      <ArrowCircleRight />
    </Icon>
    <Icon color="#d0d080">
      <ArrowCircleRight />
    </Icon>
  </Space>
</template>

<script setup lang="ts">
import Icon from "./components/Icon.vue";
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
    <Icon color="turquoise">
      <ArrowCircleRight />
    </Icon>
    <Icon color="#d0d080">
      <ArrowCircleRight />
    </Icon>
  </Space>
</template>

<script setup lang="ts">
import Icon from "./components/Icon.vue";
import Space from "./components/Space.vue";
import ArrowCircleRight from "./icons/ArrowCircleRight.vue";
</script>
```

:::
````

## Notice

::: warning Limitations
**Demo** as a top-level container, cannot be nested with other containers
:::
