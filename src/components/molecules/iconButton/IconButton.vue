<script setup lang="ts">
    import { cva } from "class-variance-authority";
    import { computed } from "vue";

    type IconButtonProps = {
        variant?: "contained" | "outlined";
        color?: "primary" | "secondary" | "tertiary";
        rounded?: "light" | "medium" | "maximum";
    };

    const props = withDefaults(defineProps<IconButtonProps>(), {
        variant: "contained",
        color: "primary",
        rounded: "medium",
    });

    const variants = cva("icon-button", {
        variants: {
            variant: {
                contained: "contained",
                outlined: "outlined",
            },
            color: {
                primary: "primary",
                secondary: "secondary",
                tertiary: "tertiary",
            },
            rounded: {
                light: "light",
                medium: "medium",
                maximum: "maximum",
            },
        },
    });

    const buttonClasses = computed(() =>
        variants({
            variant: props.variant,
            color: props.color,
            rounded: props.rounded,
        })
    );

    const emits = defineEmits<{
        click: [];
    }>();

    const handleClick = () => {
        emits("click");
    };
</script>

<template>
    <button :class="buttonClasses" type="button" @click="handleClick">
        <slot />
    </button>
</template>

<style scoped>
    .icon-button {
        width: 44px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;

        &.light {
            border-radius: 4px;
        }

        &.medium {
            border-radius: 8px;
        }

        &.maximum {
            border-radius: 50px;
        }

        &.contained {
            outline: none;

            &.primary {
                background-color: var(--color-orange);
                color: white;
            }

            &.secondary {
                background-color: var(--color-black);
                color: white;
            }

            &.tertiary {
                background-color: var(--color-cream);
            }
        }

        &.outlined {
            background-color: transparent;
            outline: 1px solid;

            &.primary {
                outline-color: var(--color-orange);
                color: var(--color-orange);
            }

            &.secondary {
                outline-color: var(--color-black);
                color: var(--color-black);
            }

            &.tertiary {
                outline-color: var(--color-cream);
                color: var(--color-cream);
            }
        }
    }
</style>
