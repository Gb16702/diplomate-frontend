<script setup lang="ts">
    import IconWrapper, { type IconWrapperProps } from "./internal/IconWrapper.vue";
    const props = defineProps<IconWrapperProps>();
</script>

<template>
    <IconWrapper v-bind="props">
        <path
            d="M5.845 9.531a1.038 1.038 0 0 1-.707-.279L.896 5.2a.956.956 0 0 1-.225-.31.919.919 0 0 1 .211-1.053 1.041 1.041 0 0 1 1.426.01l3.536 3.378 6.365-6.078c.187-.18.441-.28.707-.28.265 0 .52.1.707.28.188.178.293.421.293.675a.934.934 0 0 1-.292.676L6.552 9.252a1.038 1.038 0 0 1-.707.279Z"
        />
    </IconWrapper>
</template>
