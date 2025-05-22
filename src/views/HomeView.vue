<template>
        <Carousel></Carousel>
        <div class="container d-flex flex-column justify-content-center section-one py-3 py-md-5">
                <div class="row">
                        <div class="col-md-6 align-self-center">
                                <div class="text-center text-sm-center text-md-end mb-4">
                                        <h2 class="text-grad display-1 fw-bold mb-0">30+ años</h2>
                                        <span>Mejorando el medio ambiente y fortaleciendo el sector forestal</span>
                                </div>
                        </div>
                        <div class="col-md-6 align-self-center text-center text-sm-center text-md-start">
                                <h5 class="paragraph-title">Comprometidos a</h5>
                                <p class="pe-0 pe-lg-5">Promover la producción forestal a través del cultivo de madera
                                        procedente de plantaciones forestales o sistemas agroforestales.</p>
                                <p class="pe-0 pe-lg-5">Crear nuevas alternativas de negocios verdes para la
                                        organización y nuestros afiliados.</p>
                                <p class="pe-0 pe-lg-5">Crear oportunidades de educación y capacitación entre
                                        nuestros asociados y las comunidades en donde trabajamos.</p>
                                <a class="btn btn-outline-light">Explorar servicios!</a>
                        </div>
                </div>
        </div>
        <div class="section-two p-3 p-md-5">
                <div class="container">
                        <div class="row py-5">
                                <div class="col-md-6 align-self-center text-center text-sm-center text-md-start">
                                        <h5 class="paragraph-title text-center">Misión</h5>
                                        <p class="pe-0 pe-lg-5 paragraph">ASIREA es una organización que gestiona y desarrolla
                                                proyectos
                                                verdes sostenibles
                                                mediante el intercambio de productos, servicios, e incidencia
                                                política-social
                                                para lograr el
                                                bien común de la sociedad y del medio ambiente de Costa Rica.</p>
                                </div>
                                <div class="col-md-6 align-self-center text-center text-sm-center text-md-start">
                                        <h5 class="paragraph-title text-center">Visión</h5>
                                        <p class="pe-0 pe-lg-5 paragraph">ASIREA será reconocida como una organización evolutiva,
                                                solidaria y gestora del
                                                desarrollo integral para mejorar las condiciones de vida de las
                                                comunidades y
                                                del medio
                                                ambiente.</p>
                                </div>
                        </div>
                </div>
        </div>
</template>
<script setup lang="ts">
import Carousel from '@/components/CarouselComponent.vue';
</script>
<style scoped lang="css">
.text-grad {
        background: linear-gradient(150deg, #97c74e 0%, #2ab9a5 100%);
        background-clip: text;
        opacity: 1;
        color: transparent;
}

.paragraph-title {
        font-weight: 600;
        color: var(--title-color);
}
.paragraph {
        color: var(--text-color-3)
}

.btn-outline-light {
        background: transparent;
        border-color: #d0d4d9;
        color: #b4b9bd;
}

.btn {
        color: var(--accent-color);
        border: 2px solid var(--accent-color);
        border-radius: 2px;
        letter-spacing: 0.5px;
        position: relative;
        overflow: hidden;
        margin-bottom: 6px;
        outline: 0;
        white-space: nowrap;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
}

.btn-outline-light:hover {
        background: #d0d4d9;
        border-color: #d0d4d9;
        color: #343a40;
}

.section-two {
        background: linear-gradient(150deg, #97c74e 0%, #2ab9a5 100%);
}
</style>