<template>
    <button :class="[{ 'rounded': rounded }]">
        <component :is="isIcon" class="me-1"></component>
        <span>{{ props.label }}</span>
    </button>
</template>

<script setup lang="ts">
const props = defineProps({
    rounded: {
        type: Boolean,
        default: false,
        required: false
    },
    label: {
        type: String,
        required: false
    },
    isIcon: {
        type: Object,
        required: false
    }
})
</script>
<style scoped lang="scss">
button,
button:active {
    background-color: var(--tertiary-bg);
}

button {
    border: 2px solid var(--border-color);
    transition: transform .3s ease-in-out;
    padding: 5px 20px;
    span {
        color: var(--text-secondary-clr);
        font-weight: bold;
        font-size: small;
        text-wrap: nowrap;
    }
}

button:active {
    transform: scale(0.96);
}
.rounded {
    border-radius: 4px !important;
}
</style>
