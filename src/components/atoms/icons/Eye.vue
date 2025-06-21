<script setup lang="ts">
    import IconWrapper, { type IconWrapperProps } from "./internal/IconWrapper.vue";
    const props = defineProps<IconWrapperProps>();
</script>

<template>
    <IconWrapper v-bind="props">
        <path
            d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
        />
        <circle cx="12" cy="12" r="3" />
    </IconWrapper>
</template>
