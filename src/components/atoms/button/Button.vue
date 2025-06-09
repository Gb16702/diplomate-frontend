<script setup lang="ts">
    import { computed } from "vue";
    import { cva } from "class-variance-authority";
    import Loader from "../loader/Loader.vue";

    const buttonVariants = cva("btn-base", {
        variants: {
            variant: {
                contained: "",
                outlined: "btn-outlined",
                text: "btn-text",
            },
            color: {
                primary: "",
                secondary: "",
            },
            isLoading: {
                true: "btn-loading",
                false: "",
            },
        },
        compoundVariants: [
            { variant: "contained", color: "primary", className: "btn-contained-primary" },
            { variant: "contained", color: "secondary", className: "btn-contained-secondary" },
            { variant: "outlined", color: "primary", className: "btn-outlined-primary" },
            { variant: "outlined", color: "secondary", className: "btn-outlined-secondary" },
            { variant: "text", color: "primary", className: "btn-text-primary" },
            { variant: "text", color: "secondary", className: "btn-text-secondary" },
        ],
        defaultVariants: {
            variant: "contained",
            color: "primary",
            isLoading: false,
        },
    });

    type ButtonProps = {
        variant?: "contained" | "outlined" | "text";
        color?: "primary" | "secondary";
        type?: "button" | "submit" | "reset";
        isLoading?: boolean;
        isDisabled?: boolean;
        withShadow?: boolean;
    };

    const props = withDefaults(defineProps<ButtonProps>(), {
        variant: "contained",
        color: "primary",
        type: "button",
        isDisabled: false,
        isLoading: false,
        withShadow: false,
    });

    const isButtonDisabled = computed(() => props.isDisabled || props.isLoading);

    const shadowClass = computed(() => {
        if (!props.withShadow || props.variant !== "contained") {
            return "";
        }
        return props.color === "primary" ? "btn-shadow-primary" : "btn-shadow-secondary";
    });

    const loaderColor = computed(() => {
        if (props.variant === "contained") {
            return "#fcf7ee";
        } else {
            return props.color === "primary" ? "#c65122" : "#040402";
        }
    });

    const buttonClasses = computed(() => {
        const base = buttonVariants({
            variant: props.variant,
            color: props.color,
            isLoading: props.isLoading,
        });
        return `${base} ${shadowClass.value}`.trim();
    });

    const emit = defineEmits<{
        click: [];
    }>();

    const handleClick = () => {
        if (!isButtonDisabled.value) {
            emit("click");
        }
    };
</script>

<template>
    <button
        :class="buttonClasses"
        :disabled="isButtonDisabled"
        :type="type"
        :aria-busy="isLoading"
        @click="handleClick"
    >
        <slot />

        <span v-if="isLoading" class="loader-container">
            <Loader :stroke="loaderColor" />
        </span>
    </button>
</template>

<style scoped>
    .btn-base {
        font-family: var(--font-dm-sans), sans-serif;
        font-weight: 500;
        padding: 12px 24px;
        border: none;
        cursor: pointer;
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 44px;
    }

    .btn-base:disabled {
        cursor: not-allowed;
        opacity: 0.6;
    }

    .btn-contained-primary {
        background-color: var(--color-orange);
        color: var(--color-cream);
    }

    .btn-contained-primary:not(:disabled):hover {
        background-color: var(--color-orange-dark);
    }

    .btn-contained-secondary {
        background-color: var(--color-black);
        color: var(--color-cream);
    }

    .btn-contained-secondary:not(:disabled):hover {
        background-color: rgba(4, 4, 2, 0.9);
    }

    .btn-outlined {
        background-color: transparent;
        border: 2px solid;
    }

    .btn-outlined-primary {
        border-color: var(--color-orange);
        color: var(--color-orange);
    }

    .btn-outlined-secondary {
        border-color: var(--color-black);
        color: var(--color-black);
    }

    .btn-text {
        background-color: transparent;
        border: none;
        padding: 8px 16px;
    }

    .btn-text-primary {
        color: var(--color-orange);
    }

    .btn-text-secondary {
        color: var(--color-black);
    }

    .btn-shadow-primary {
        box-shadow: 0 4px 14px 0 rgba(198, 81, 34, 0.4);
    }

    .btn-shadow-secondary {
        box-shadow: 0 4px 14px 0 rgba(4, 4, 2, 0.4);
    }

    .btn-loading {
        color: transparent;
    }

    .loader-container {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
