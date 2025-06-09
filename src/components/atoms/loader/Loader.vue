<script setup lang="ts">
  type Props = {
    stroke?: string;
  }

  withDefaults(defineProps<Props>(), {
    stroke: "white"
  });
</script>

<template>
  <svg class="spinner" width="18px" height="18px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
    <circle class="circle" fill="none" :stroke="stroke" stroke-width="7" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
  </svg>
</template>

<style scoped>
  .spinner {
    animation: rotation 1.35s linear infinite;
  }

  .circle {
    stroke-dasharray: 180;
    stroke-dashoffset: 0;
    transform-origin: center;
    animation: turn 1.35s ease-in-out infinite;
  }

  @keyframes rotation {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(270deg); }
  }

  @keyframes turn {
    0% { stroke-dashoffset: 180; }
    50% { stroke-dashoffset: 45; transform: rotate(135deg); }
    100% { stroke-dashoffset: 180; transform: rotate(450deg); }
  }
</style>