<template>
    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"
        class="duoicon duoicon-alert-octagon">
        <path fill="currentColor" fill-rule="evenodd"
            d="M15.314 2a2 2 0 0 1 1.414.586l4.686 4.686A2 2 0 0 1 22 8.686v6.628a2 2 0 0 1-.586 1.414l-4.686 4.686a2 2 0 0 1-1.414.586H8.686a2 2 0 0 1-1.414-.586l-4.686-4.686A2 2 0 0 1 2 15.314V8.686a2 2 0 0 1 .586-1.414l4.686-4.686A2 2 0 0 1 8.686 2h6.628Z"
            class="duoicon-secondary-layer" opacity=".3"></path>
        <path fill="currentColor" fill-rule="evenodd"
            d="M12 6a1 1 0 0 0-.993.883L11 7v6a1 1 0 0 0 1.993.117L13 13V7a1 1 0 0 0-1-1Zm0 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
            class="duoicon-primary-layer"></path>
    </svg>
</template>

<style scoped>
.duoicon {
    transition: transform 0.2s ease;
}
.duoicon:hover {
    transform: scale(1.1);
}
.duoicon .duoicon-primary-layer {
    color: var(--error-color);
}
.duoicon .duoicon-secondary-layer {
    opacity: 0.5;
    color: var(--error-sec-color);
}
</style>