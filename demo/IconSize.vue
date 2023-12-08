<template>
  <Space align="center">
    <Icon size="large"> <!-- [!code focus] -->
      <ArrowCircleRight />
    </Icon>
    <Icon size="middle"> <!-- [!code focus] -->
      <ArrowCircleRight />
    </Icon>
    <Icon size="small"> <!-- [!code focus] -->
      <ArrowCircleRight />
    </Icon>
    <Icon size="24"> <!-- [!code focus] -->
      <ArrowCircleRight />
    </Icon>
  </Space>
</template>

<script setup lang="ts">
import Icon from "../components/Icon.vue";  // [!code focus]
import Space from "../components/Space.vue";
import ArrowCircleRight from "../icons/ArrowCircleRight.vue";
</script>