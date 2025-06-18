<script setup lang="ts">
    import { cva } from "class-variance-authority";

    type ToastProps = {
        title: string;
        description?: string;
        type: "short" | "descriptive" | "action";
        variant: "info" | "error";
        visible: boolean;
        actionLabel?: string;
    };

    const props = withDefaults(defineProps<ToastProps>(), {
        type: "short",
        variant: "info",
        visible: true,
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
        font-family: var(--font-rubik), sans-serif;
        font-size: 14px;
        border-radius: 8px;
        min-height: 45px;
        padding: 5px 12px;
        border: 1px solid var(--color-gray-lighter);
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-width: 350px;
    }

    .toast__title {
        font-weight: 400;
        margin: 0;
    }

    .toast__description {
        margin: 5px 0 0;
    }

    .toast--short {
        height: 45px;
    }

    .toast--descriptive {
        height: 60px;
    }

    .toast--info {
        background-color: white;
    }
</style>
