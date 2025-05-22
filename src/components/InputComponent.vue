<template>
    <input :class="['form-control', {'is-invalid': error}]" :placeholder="props.placeholder"/>
</template>

<script setup>
import { defineProps } from 'vue';

    const props = defineProps({
        placeholder: {
            type: String,
            required: false
        },
        error: {
            type: Boolean,
            required: false
        }
    })
</script>
<style scoped>
    .form-control {
        color: var(--text-secondary-clr);
    }
    .form-control:focus {
        border-width: 2px;
        border-color: var(--text-secondary-clr);
        box-shadow: none;
    }
</style>