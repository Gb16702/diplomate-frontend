<script setup lang="ts">
    type FormTextAreaProps = {
        placeholder: string;
        maxLength: number;
    };

    const props = withDefaults(defineProps<FormTextAreaProps>(), {
        placeholder: "Write your opening...",
    });
</script>

<template>
    <div class="form-text-area-wrapper">
        <textarea :placeholder="props.placeholder" :maxlength="props.maxLength" />
    </div>
</template>

<style scoped>
    .form-text-area-wrapper {
        padding: 10px;
        border-radius: 8px;
        background-color: white;
        outline: 1px solid var(--color-gray-lighter);
        transition: border 0.15s ease;
        min-width: 300px;
        width: 100%;
        max-width: 600px;
        min-height: 125px;
        height: 125px;
        max-height: 300px;

        &:focus-within {
            outline: 1px solid var(--color-orange);
        }
    }

    textarea {
        color: var(--color-black);
        font-family: var(--font-space-grotesk), sans-serif;
        border: none;
        resize: none;
        outline: none;
        height: 100%;
        width: 100%;
        overflow: hidden;

        &::placeholder {
            color: var(--color-gray-dark);
        }
    }
</style>
