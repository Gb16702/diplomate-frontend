<script setup lang="ts">
    type CheckboxProps = {
        id: string;
        modelValue: boolean;
        disabled?: boolean;
        ariaLabel?: string;
        ariaDescribedBy?: string;
    };

    const props = withDefaults(defineProps<CheckboxProps>(), {
        disabled: false,
        ariaLabel: undefined,
        ariaDescribedBy: undefined,
    });

    const emits = defineEmits<{
        "update:modelValue": [value: boolean];
    }>();

    const handleChange = (e: Event) => {
        const target = e.target as HTMLInputElement;
        emits("update:modelValue", target.checked);
    };
</script>

<template>
    <div class="checkbox">
        <input
            :id="id"
            type="checkbox"
            class="checkbox__input"
            :checked="props.modelValue"
            :disabled="props.disabled"
            :aria-label="props.ariaLabel"
            :aria-describedby="props.ariaDescribedBy"
            @change="handleChange"
        />
        <label v-if="id" :for="id" class="checkbox__label">
            <svg class="checkbox__check" width="14" height="10" viewBox="0 0 14 10">
                <path
                    d="M5.84463 9.53129C5.71336 9.53154 5.58334 9.50704 5.46201 9.45917C5.34069 9.4113 5.23045 9.34101 5.13763 9.25235L0.895631 5.19905C0.800057 5.11099 0.723799 5.00563 0.671305 4.88912C0.618812 4.77261 0.591135 4.64727 0.589888 4.52043C0.588641 4.39359 0.61385 4.26778 0.664044 4.15035C0.714238 4.03291 0.788412 3.92621 0.882237 3.83645C0.976063 3.74669 1.08766 3.67568 1.21052 3.62757C1.33338 3.57945 1.46504 3.55519 1.59782 3.5562C1.7306 3.55721 1.86184 3.58348 1.98388 3.63346C2.10592 3.68344 2.21632 3.75614 2.30863 3.84732L5.84363 7.22427L12.2086 1.14576C12.3961 0.966504 12.6505 0.865751 12.9158 0.865662C13.181 0.865572 13.4355 0.966153 13.6231 1.14528C13.8108 1.3244 13.9162 1.5674 13.9163 1.82081C13.9164 2.07422 13.8111 2.31728 13.6236 2.49654L6.55163 9.25235C6.45881 9.34101 6.34857 9.4113 6.22725 9.45917C6.10592 9.50704 5.9759 9.53154 5.84463 9.53129Z"
                />
            </svg>
        </label>
    </div>
</template>

<style>
    .checkbox {
        position: relative;
        display: inline-block;
    }

    .checkbox__input {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
        pointer-events: none;
    }

    .checkbox__label {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        outline: 1px solid var(--color-gray);
        border-radius: 50px;
        background-color: transparent;
        transition: all 0.15s ease;
        cursor: pointer;
    }

    .checkbox__check {
        fill: transparent;
    }

    .checkbox__input:not(:checked):focus + .checkbox__label {
        outline-color: var(--color-green);
    }

    .checkbox__input:checked + .checkbox__label .checkbox__check path {
        stroke-width: 0.5;
        stroke: var(--color-cream);
        fill: var(--color-cream);
    }

    .checkbox__input:checked + .checkbox__label {
        background-color: var(--color-green);
        outline-color: transparent;
    }

    .checkbox__input:checked:not(:disabled) + .checkbox__label:hover {
        background-color: var(--color-green-dark);
    }

    .checkbox__input:disabled + .checkbox__label {
        cursor: not-allowed;
        background-color: var(--color-gray-lighter);
        outline-color: transparent;
    }

    .checkbox__input:not(:checked):not(:disabled) + .checkbox__label:hover {
        border-color: var(--color-green);
        background-color: var(--color-green-light);
    }

    .checkbox__input:disabled + .checkbox__label .checkbox__check {
        opacity: 0 !important;
    }

    .checkbox__input:checked:focus-visible + .checkbox__label {
        outline: 2px solid var(--color-green);
        outline-offset: 1px;
    }
</style>
