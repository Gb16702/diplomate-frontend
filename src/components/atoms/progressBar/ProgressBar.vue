<script setup lang="ts">
    import { computed, ref, watch, onMounted } from "vue";

    type ProgressBarProps = {
        value: number;
        max?: number;
        showShine?: boolean;
    };

    const props = withDefaults(defineProps<ProgressBarProps>(), {
        max: 100,
        showShine: false,
    });

    const displayedValue = ref(0);
    const isInitialized = ref(false);

    const targetPercentage = computed(() => {
        return Math.min(Math.max((props.value / props.max) * 100, 0), 100);
    });

    const isComplete = computed(() => {
        return targetPercentage.value >= 100;
    });

    watch(
        targetPercentage,
        newPercentage => {
            if (!isInitialized.value) {
                setTimeout(() => {
                    displayedValue.value = newPercentage;
                }, 100);
            } else {
                displayedValue.value = newPercentage;
            }
        },
        { immediate: true }
    );

    onMounted(() => {
        isInitialized.value = true;
    });
</script>

<template>
    <div class="progress-bar">
        <div class="progress-bar__track">
            <div
                class="progress-bar__fill"
                :class="{
                    'progress-bar__fill--initialized': isInitialized,
                    'progress-bar__fill--complete': isComplete && showShine,
                }"
                :style="{
                    transform: `scaleX(${displayedValue / 100})`,
                    transformOrigin: 'left center',
                }"
            />
        </div>
    </div>
</template>

<style scoped>
    .progress-bar {
        width: 100%;
        min-width: 300px;
        max-width: 500px;
        height: 8px;
    }

    .progress-bar__track {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: white;
        border-radius: 50px;
        overflow: hidden;
    }

    .progress-bar__fill {
        width: 100%;
        height: 100%;
        background-color: var(--color-orange);
        border-radius: 0;
        transform: scaleX(0);
        transform-origin: left center;
        will-change: transform;
        position: relative;

        transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    .progress-bar__fill--initialized {
        transition: transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .progress-bar__fill--complete::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            rgba(255, 255, 255, 0.4),
            rgba(255, 255, 255, 0.2),
            transparent
        );
        animation: shine 3s infinite;
    }

    @keyframes shine {
        0% {
            left: -100%;
        }
        50% {
            left: 100%;
        }
        100% {
            left: 100%;
        }
    }
</style>
