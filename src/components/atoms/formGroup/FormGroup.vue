<script setup lang="ts"></script>

<template>
    <div class="form-group">
        <slot />
    </div>
</template>

<style>
    .form-group-wrapper {
        padding: 56px;
        min-width: 350px;
        border-radius: 14px;
        background-color: var(--color-cream);
    }

    .form-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
</style>
