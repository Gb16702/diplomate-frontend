<script setup lang="ts">
    import { cva } from "class-variance-authority";

    export type ToastProps = {
        title: string;
        description?: string | null;
        type?: "short" | "descriptive" | "action";
        variant?: "info" | "error";
        visible?: boolean;
        actionLabel?: string | null;
    };

    const props = withDefaults(defineProps<ToastProps>(), {
        description: null,
        type: "short",
        variant: "info",
        visible: true,
        actionLabel: null,
    });

    const emits = defineEmits<{
        close: [];
        action: [];
    }>();

    const toastVariants = cva("toast", {
        variants: {
            type: {
                short: "toast--short",
                descriptive: "toast--descriptive",
                action: "toast--action",
            },
            variant: {
                info: "toast--info",
                error: "toast--error",
            },
            visible: {
                true: "toast--visible",
                false: "toast--hidden",
            },
        },
        defaultVariants: {
            type: "short",
            variant: "info",
            visible: true,
        },
    });

    const handleClose = () => {
        emits("close");
    };

    const handleAction = () => {
        emits("action");
    };
</script>

<template>
    <div
        :class="
            toastVariants({
                type: props.type,
                variant: props.variant,
                visible: props.visible,
            })
        "
        @click="handleClose"
    >
        <div class="toast__content">
            <h4 class="toast__title">
                {{ props.title }}
            </h4>
            <p
                v-if="
                    (props.type === 'descriptive' || props.type === 'action') && props.description
                "
                class="toast__description"
            >
                {{ props.description }}
            </p>
        </div>

        <button
            v-if="props.type === 'action' && props.actionLabel"
            class="toast__action"
            @click.stop="handleAction"
        >
            {{ props.actionLabel }}
        </button>
    </div>
</template>

<style scoped>
    .toast {
        font-family:
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Helvetica Neue,
            Arial,
            Noto Sans,
            sans-serif,
            "Apple Color Emoji",
            "Segoe UI Emoji",
            Segoe UI Symbol,
            "Noto Color Emoji";
        font-size: 14px;
        border-radius: 8px;
        padding: 18px;
        border: 1px solid var(--color-gray-lighter);
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-width: 350px;
        min-height: 40px;
        height: auto;
        background-color: white;
    }

    .toast__title {
        margin: 0;
        font-weight: 600;
    }

    .toast__description {
        margin: 3px 0 0;
        font-weight: 400;
    }

    .toast__action {
        min-width: 40px;
        height: 28px;
        padding: 4px 10px;
        color: white;
        border-radius: 4px;
        font-weight: 500;
        transition: background-color 0.15s ease;
    }

    .toast--info .toast__description {
        color: var(--color-gray-light);
    }

    .toast--info .toast__action {
        background-color: var(--color-black);

        &:hover {
            background-color: var(--color-orange-dark);
        }
    }

    .toast--error .toast__action {
        background-color: var(--color-red);
        color: white;

        &:hover {
            background-color: var(--color-red-dark);
        }
    }

    .toast--action {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        column-gap: 28px;
    }
</style>
