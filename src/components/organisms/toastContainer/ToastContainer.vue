<script setup lang="ts">
    import Toast from "@/components/molecules/toast/Toast.vue";
    import { useToast, type Toast as ToastType } from "@/composables/useToast";

    export type ToastPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

    type ToastContainerProps = {
        position?: ToastPosition;
    };

    const props = withDefaults(defineProps<ToastContainerProps>(), {
        position: "bottom-right",
    });

    const { toasts, removeToast } = useToast();

    const emits = defineEmits<{
        "toast-action": [toast: ToastType];
    }>();

    const handleToastAction = (toast: ToastType): void => {
        emits("toast-action", toast);
    };
</script>

<template>
    <Teleport to="body">
        <div :class="['toast-container', `toast-container--${props.position}`]">
            <TransitionGroup name="toast" tag="div" class="toast-list">
                <Toast
                    v-for="toast in toasts"
                    :key="toast.id"
                    :title="toast.title"
                    :description="toast.description"
                    :type="toast.type"
                    :variant="toast.variant"
                    :action-label="toast.actionLabel"
                    :visible="toast.visible"
                    @close="removeToast(toast.id)"
                    @action="handleToastAction(toast)"
                />
            </TransitionGroup>
        </div>
    </Teleport>
</template>

<style scoped>
    .toast-container {
        position: fixed;
        z-index: 9999;
        pointer-events: none;
        display: flex;
        flex-direction: column;
        gap: 12px;
        max-width: min(400px, 90vw);
        max-height: 100dvh;
        overflow: hidden;
    }

    .toast-list {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .toast-container--top-right {
        top: 20px;
        right: 20px;
    }

    .toast-container--top-left {
        top: 20px;
        left: 20px;
    }

    .toast-container--bottom-right {
        bottom: 20px;
        right: 20px;
    }

    .toast-container--bottom-left {
        bottom: 20px;
        left: 20px;
    }

    .toast-container--bottom-right .toast-list,
    .toast-container--bottom-left .toast-list {
        flex-direction: column-reverse;
    }

    .toast-enter-active,
    .toast-leave-active {
        transition: all 0.3s ease;
    }

    .toast-enter-from {
        opacity: 0;
        transform: translateX(100%);
    }

    .toast-leave-to {
        opacity: 0;
        transform: translateX(100%);
    }

    .toast-container--top-left .toast-enter-from,
    .toast-container--bottom-left .toast-enter-from {
        transform: translateX(-100%);
    }

    .toast-container--top-left .toast-leave-to,
    .toast-container--bottom-left .toast-leave-to {
        transform: translateX(-100%);
    }

    .toast-container--bottom-right .toast-enter-from,
    .toast-container--bottom-left .toast-enter-from {
        transform: translateY(100%);
    }

    .toast-container--bottom-right .toast-leave-to,
    .toast-container--bottom-left .toast-leave-to {
        transform: translateY(100%);
    }

    .toast-move {
        transition: transform 0.3s ease;
    }
</style>
