<script setup lang="ts">
    import { ref, computed } from "vue";
    import EyeOff from "../../atoms/icons/external/EyeOff.vue";
    import Eye from "../../atoms/icons/external/Eye.vue";

    type FormInputProps = {
        id: string;
        type?: string;
        placeholder: string;
        isDisabled?: boolean;
    };

    const showPassword = ref(false);

    const props = withDefaults(defineProps<FormInputProps>(), {
        type: "text",
        isDisabled: false,
    });

    const isPassword = computed(() => props.type === "password");
    const isPasswordVisible = computed(() => {
        return isPassword.value ? (showPassword.value ? "text" : "password") : props.type;
    });
</script>

<template>
    <div class="form-input-wrapper">
        <input
            :id="props.id"
            :type="isPasswordVisible"
            :name="props.id"
            :disabled="props.isDisabled"
            :placeholder="props.placeholder"
            :class="{ isPasswordInput: isPassword }"
            v-bind="$attrs"
        >
        <button
            v-if="isPassword"
            type="button"
            class="password-input-type-toggle"
            :tabindex="-1"
            @click="showPassword = !showPassword"
        >
            <Eye v-if="showPassword" :size="16" />
            <EyeOff v-else :size="16" />
        </button>
    </div>
</template>

<style scoped>
    .form-input-wrapper {
        position: relative;
        width: 350px;
        height: 44px;
        border-radius: 50px;
        overflow: hidden;
        outline: 1px solid var(--color-gray-lighter);
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: start;
        transition: outline 0.15s ease;

        &:focus-within {
            outline: 1px solid var(--color-orange);
        }

        &:has(input:disabled) {
            background-color: var(--color-gray-light);
        }

        button {
            position: absolute;
            right: 12px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--color-gray-light);
            background-color: transparent;
            padding: 7px;
        }
    }
</style>
