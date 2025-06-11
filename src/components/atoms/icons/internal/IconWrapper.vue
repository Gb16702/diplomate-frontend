<script setup lang="ts">
    export type IconWrapperProps = {
        size?: number;
        width?: number;
        fill?: string;
        stroke?: string;
        classes?: string;
    };

    const props = withDefaults(defineProps<IconWrapperProps>(), {
        size: 16,
        width: 2,
        fill: "none",
        stroke: "currentColor",
        classes: "",
    });
</script>

<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="props.size"
        :height="props.size"
        viewBox="0 0 24 24"
        :fill="props.fill"
        :stroke="props.stroke"
        :stroke-width="props.width"
        stroke-linecap="round"
        stroke-linejoin="round"
        :class="props.classes"
        role="img"
    >
        <slot />
    </svg>
</template>
