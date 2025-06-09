<script setup lang="ts">
type Props = {
  inputId: string;
  required: boolean;
}

defineProps<Props>()
</script>

<template>
  <div class="label-wrapper">
    <label
        :for="inputId"
        :class="{ 'required': required }"
    >
      <slot />
    </label>
    <span v-if="!required" class="optional">
      Optional
    </span>
  </div>
</template>

<style scoped>
  .label-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    font-weight: 300;
    font-family: var(--font-dm-sans), sans-serif;
  }

  label {
    color: black;
    display: flex;
    flex: 1;

    &.required::after {
      content: "*";
      margin-left: 2px;
      color: var(--color-orange);
    }
  }

  .optional {
    color: var(--color-gray-dark);
  }
</style>