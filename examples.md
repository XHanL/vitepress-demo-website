---
outline: deep
---

# Examples

Two of use

## Relative path

::: demo Size | The following sizes are `large`, `middle`, `small`, `24px`
demo/IconSize.vue
:::

```md
::: demo Size | The following sizes are `large`, `middle`, `small`, `24px`
demo/IconSize.vue
:::
```

## Code fence

::: demo _Color_ | Specify a **_`color`_** for the **icon**

```vue
<template>
  <CrSpace>
    <CrIcon color="turquoise" /> <!-- [!code focus:2] -->
    <CrIcon color="#d0d080" />
  </CrSpace>
</template>

<script setup lang="ts">
import CrIcon from "./components/CrIcon.vue"; // [!code focus]
import CrSpace from "./components/CrSpace.vue";
</script>
```

:::

````md
::: demo _Color_ | Specify a **_`color`_** for the **icon**

```vue
<template>
  <CrSpace>
    <CrIcon color="turquoise" /> <!-- Put code focus here -->
    <CrIcon color="#d0d080" />
  </CrSpace>
</template>

<script setup lang="ts">
import CrIcon from "./components/CrIcon.vue"; // Put code focus here
import CrSpace from "./components/CrSpace.vue";
</script>
```

:::
````

## Infos

::: warning Limitations
**Demo** as a top-level container, cannot be nested with other containers
:::

::: tip Code Focus

- **`<script>`** comment format is **`// [!code focu`**
- **`<template>`** comment format is **`<!-- [!code focus] -->`**
- Learn more at vitepress [Focus in Code Blocks](https://vitepress.dev/guide/markdown#focus-in-code-blocks)

:::
