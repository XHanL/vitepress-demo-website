<template>
  <CrSpace align="center">
    <CrIcon size="large" /> <!-- [!code focus:4] -->
    <CrIcon size="middle" />
    <CrIcon size="small" />
    <CrIcon size="24" />
  </CrSpace>
</template>

<script setup lang="ts">
import CrIcon from "../components/CrIcon.vue" // [!code focus]
import CrSpace from "../components/CrSpace.vue";
</script>