<template>
    <div class="swiper-container">
        <swiper :modules="[A11y, Autoplay]" :autoplay="{ delay: 180000, disableOnInteraction: false }" :loop="true">
            <swiper-slide><img :src="Foto3" alt=""></swiper-slide>
            <swiper-slide><img :src="Foto" alt=""></swiper-slide>
            <swiper-slide><img :src="Foto1" alt=""></swiper-slide>
            <swiper-slide><img :src="Foto2" alt=""></swiper-slide>
        </swiper>
    </div>
</template>
<script setup lang="ts">
import { A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import Foto from '@/assets/foto.jpg'
import Foto1 from '@/assets/foto1.jpg'
import Foto2 from '@/assets/foto2.jpg'
import Foto3 from '@/assets/background.webp'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
</script>
<style scoped lang="scss">

.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    overflow: hidden;
    width: 100%;

    img {
        width: 100% !important;
        height: 450px;
        object-fit: cover;
    }
}
@include respond-to(desktop) {
    .swiper-slide img {
        height: 570px;
    }
}
</style>