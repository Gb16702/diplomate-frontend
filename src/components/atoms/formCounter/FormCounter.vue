<script setup lang="ts">
    type FormCounterProps = {
        remainingCharacters?: number;
    };

    const props = withDefaults(defineProps<FormCounterProps>(), {
        remainingCharacters: 200,
    });
</script>

<template>
    <span class="counter" :class="{ low: props.remainingCharacters < 20 }">
        {{ props.remainingCharacters }}
    </span>
</template>

<style scoped>
    .counter {
        font-family: var(--font-space-grotesk), sans-serif;
        color: var(--color-black);
        font-size: 14px;

        &.low {
            color: var(--color-orange);
        }
    }
</style>
