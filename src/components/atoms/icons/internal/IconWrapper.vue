<script setup lang="ts">
    export type IconWrapperProps = {
        size?: string;
        fill?: string;
        stroke?: string;
        width?: string;
        classes?: string;
    };

    withDefaults(defineProps<IconWrapperProps>(), {
        size: "16",
        fill: "none",
        stroke: "currentColor",
        width: "2",
        classes: "",
    });
</script>

<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="size"
        :height="size"
        viewBox="0 0 24 24"
        :fill="fill"
        :stroke="stroke"
        :stroke-width="width"
        stroke-linecap="round"
        stroke-linejoin="round"
        :class="classes"
        role="img"
    >
        <slot />
    </svg>
</template>
