<script setup lang="ts">
    import { ref, computed } from "vue";

    interface TooltipProps {
        content: string;
        position?: "top" | "bottom" | "left" | "right";
    }

    const props = withDefaults(defineProps<TooltipProps>(), {
        position: "top",
    });

    const isVisible = ref<boolean>(false);

    const tooltipPosition = computed(() => `tooltip--${props.position}`);

    const showTooltip = (): void => {
        isVisible.value = true;
    };

    const hideTooltip = (): void => {
        isVisible.value = false;
    };
</script>

<template>
    <div class="tooltip-container" @mouseenter="showTooltip" @mouseleave="hideTooltip">
        <slot></slot>

        <div v-if="isVisible" class="tooltip" :class="tooltipPosition">
            {{ content }}
        </div>
    </div>
</template>

<style scoped>
    .tooltip-container {
        position: relative;
        display: inline-block;
    }

    .tooltip {
        position: absolute;
        background-color: white;
        font-family: var(--font-dm-sans), sans-serif;
        color: var(--color-gray-dark);
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 12px;
        font-weight: 600;
        white-space: nowrap;
        z-index: 1000;
        box-shadow: 0 0px 20px rgba(0, 0, 0, 0.15);

        opacity: 0;
        animation: fadeIn 0.2s ease-in-out forwards;
    }

    .tooltip--top {
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
    }

    .tooltip--top::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border: 6px solid transparent;
        border-top-color: white;
    }

    .tooltip--bottom {
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        animation: fadeInBottom 0.2s ease-in-out forwards;
    }

    .tooltip--bottom::after {
        content: "";
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        border: 6px solid transparent;
        border-bottom-color: white;
    }

    .tooltip--left {
        right: 100%;
        top: 50%;
        transform: translateY(-50%);
        animation: fadeInLeft 0.2s ease-in-out forwards;
    }

    .tooltip--left::after {
        content: "";
        position: absolute;
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        border: 6px solid transparent;
        border-left-color: white;
    }

    .tooltip--right {
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        animation: fadeInRight 0.2s ease-in-out forwards;
    }

    .tooltip--right::after {
        content: "";
        position: absolute;
        right: 100%;
        top: 50%;
        transform: translateY(-50%);
        border: 6px solid transparent;
        border-right-color: white;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-4px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(-12px);
        }
    }

    @keyframes fadeInBottom {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(4px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(12px);
        }
    }

    @keyframes fadeInLeft {
        from {
            opacity: 0;
            transform: translateY(-50%) translateX(-4px);
        }
        to {
            opacity: 1;
            transform: translateY(-50%) translateX(-12px);
        }
    }

    @keyframes fadeInRight {
        from {
            opacity: 0;
            transform: translateY(-50%) translateX(4px);
        }
        to {
            opacity: 1;
            transform: translateY(-50%) translateX(12px);
        }
    }
</style>
