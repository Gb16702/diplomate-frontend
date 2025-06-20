<script setup lang="ts">
    import FormCounter from "@/components/atoms/formCounter/FormCounter.vue";
    import { ref, computed } from "vue";

    type FormTextAreaProps = {
        maxLength: number;
        placeholder?: string;
    };

    const props = withDefaults(defineProps<FormTextAreaProps>(), {
        placeholder: "Write your opening...",
    });

    const content = ref("");

    const remainingCharacters = computed(() => {
        return props.maxLength - content.value.length;
    });
</script>

<template>
    <div class="form-text-area-wrapper">
        <textarea
            v-model="content"
            :placeholder="props.placeholder"
            :maxlength="props.maxLength"
            spellcheck="false"
        />
        <div class="form-text-area-bottom">
            <FormCounter :remaining-characters="remainingCharacters" />
        </div>
    </div>
</template>

<style scoped>
    .form-text-area-wrapper {
        padding: 10px;
        border-radius: 8px;
        background-color: white;
        outline: 1px solid var(--color-gray-lighter);
        transition: border 0.15s ease;
        width: 400px;
        max-width: 600px;
        min-height: 125px;
        height: 125px;
        max-height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &:focus-within {
            outline: 1px solid var(--color-orange);
        }
    }

    .form-text-area-bottom {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: end;
        padding: 5px 0 0;
    }

    textarea {
        color: var(--color-black);
        font-family: var(--font-space-grotesk), sans-serif;
        border: none;
        resize: none;
        outline: none;
        height: 100%;
        width: 100%;
        overflow-y: auto;
        scrollbar-width: none;
        &::-webkit-scrollbar {
            display: none;
        }

        &::placeholder {
            color: var(--color-gray-dark);
        }
    }
</style>
