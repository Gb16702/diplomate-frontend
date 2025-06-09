<script setup lang="ts">

</script>

<template>
  <p class="helper-text">
    <slot />
  </p>
</template>

<style scoped>
  .helper-text {
    font-size: 14px;
    color: var(--color-gray-dark);
    line-height: 1.25;
    font-weight: 300;
    font-family: var(--font-space-grotesk), sans-serif;
  }
</style>
