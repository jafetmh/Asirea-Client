<template>
    <input class="form-control" :placeholder="props.placeholder"/>
</template>

<script setup>
import { defineProps } from 'vue';

    const props = defineProps({
        placeholder: {
            type: String,
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
        border-color: rgba(var(--bg-secondary-rgb),1);
        box-shadow: none;
    }
</style>