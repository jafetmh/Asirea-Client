<template>
    <button :class="['btn', { 'rounded-pill': rounded }]">
        <component :is="isIcon" class="me-1"></component>
        <span>{{ props.label }}</span>
    </button>
</template>

<script setup>
const props = defineProps({
    rounded: {
        type: Boolean,
        default: false,
        required: false
    },
    label: {
        type: String,
        required: true
    },
    isIcon: {
        type: Object,
        required: false
    }
})
</script>
<style scoped>
.btn {
    color: var(--text-color);
    border-color: var(--border-color);
    box-shadow: 0 0.1em rgba(var(--bg-secondary-rgb), 1);
    transition: 0.2s;
}
span {
    color: var(--text-secondary-clr);
}
.btn:hover {
    transform: translateY(-0.05em);
    box-shadow: 0 0.15em rgba(var(--bg-secondary-rgb), 1);
}
.btn:active {
    transform: translateY(0.05em);
    box-shadow: 0 0.05em rgba(var(--bg-secondary-rgb), 1);
}
</style>
