<template>
        <section>
                <div class="asirea-bg">
                        <div class="asirea-title-container display-4 p-4 p-md-5">
                                <h2 class="asirea display-4">Asociación para el Desarrollo
                                        <span class="text-grad">Sostenible</span> de la Región Atlántica
                                </h2>
                        </div>
                </div>
        </section>
        <div class="container d-flex flex-column justify-content-center section-one py-3 py-md-5">
                <div class="row">
                        <div class="col-md-6 align-self-center">
                                <div class="text-center text-sm-center text-md-end mb-4 me-md-5">
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
        <div class="section-two rounded shadow-sm p-3 p-md-5">
                <div class="container">
                        <div class="row py-5">
                                <div class="col-md-6 align-self-center text-center text-sm-center text-md-start">
                                        <div class="mission">
                                                <h5 class="paragraph-title text-center">Misión</h5>
                                                <p class="pe-0 pe-lg-5 paragraph">ASIREA es una organización que
                                                        gestiona y
                                                        desarrolla
                                                        proyectos
                                                        verdes sostenibles
                                                        mediante el intercambio de productos, servicios, e incidencia
                                                        política-social
                                                        para lograr el
                                                        bien común de la sociedad y del medio ambiente de Costa Rica.
                                                </p>
                                        </div>
                                </div>
                                <div class="col-md-6 align-self-center text-center text-sm-center text-md-start">
                                        <div class="vision">
                                                <h5 class="paragraph-title text-center">Visión</h5>
                                                <p class="pe-0 pe-lg-5 paragraph">ASIREA será reconocida como una
                                                        organización
                                                        evolutiva,
                                                        solidaria y gestora del
                                                        desarrollo integral para mejorar las condiciones de vida de las
                                                        comunidades y
                                                        del medio
                                                        ambiente.</p>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
        <div class="my-3 my-md-5">
                <div class="container">
                        <div class="px-lg-5">
                                <Timeline :value="events" layout="vertical" :align="desktopWinSize ? 'alternate' : ''"
                                        class="customized-timeline">
                                        <template #opposite>
                                                <img src="../assets/background.webp">
                                        </template>
                                        <template #marker>
                                        </template>
                                        <template #content="slotProps">
                                                <Card class="custom-card shadow">
                                                        <template #title>
                                                                {{ slotProps.item.titulo }}
                                                        </template>
                                                        <template #content>
                                                                <p style="font-size: .9em;">{{ slotProps.item.parrafo }}
                                                                </p>
                                                        </template>
                                                </Card>
                                        </template>
                                </Timeline>
                        </div>
                </div>
        </div>
</template>
<script setup lang="ts">
import { Eventos } from '@/lang/esp.json'
import { onBeforeUnmount, onMounted, ref } from 'vue';

const desktopWinSize = ref(false);
const events = ref(Object.values(Eventos))

function updateLayout() {
        desktopWinSize.value = window.matchMedia('(min-width: 769px)').matches ? true : false
}
onMounted(() => {
        updateLayout()
        window.addEventListener('resize', updateLayout);
})
onBeforeUnmount(() => {
        window.removeEventListener('resize', updateLayout)
})

</script>
<style scoped lang="scss">
.asirea-bg {
        width: 100%;
        height: calc(100vh - 80px);
        background-image: url('../assets/background.webp');
        background-size: cover;
        background-position: center center;

        .asirea-title-container {
                width: 50%;
                height: 100%;
                background: linear-gradient(0.25turn, var(--black-color), var(--black-color), transparent);
                opacity: 0.8;

                .asirea {
                        line-height: 1.6;
                        font-weight: 610;
                        color: #c4c8cc;
                        text-wrap: wrap;
                }
        }
}

.pattern-overlay {
        position: relative;
        z-index: 1;
}

.shape-container-1 {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
        z-index: 2;

        svg {
                position: relative;
                fill: var(--bg-body);
        }
}


::v-deep(.customized-timeline) {
        .p-timeline-event {

                .p-timeline-event-opposite,
                .p-timeline-event-content {
                        padding-top: 10px;
                        padding-bottom: 10px;
                }
        }
}

@media screen and (max-width: 960px) {
        ::v-deep(.customized-timeline) {
                .p-timeline-event:nth-child(even) {
                        flex-direction: row !important;

                        .p-timeline-event-content {
                                text-align: left !important;
                        }
                }

                .p-timeline-event-opposite {
                        display: none;
                        flex: 0;
                }
        }
}

@include respond-to(desktop) {
        ::v-deep(.customized-timeline) {
                .p-timeline-event {
                        gap: 10px;

                        .p-timeline-event-opposite {
                                img {
                                        width: 100%;
                                        height: 100%;
                                        border-radius: 2px;
                                }
                        }
                }
        }
}

::v-deep(.custom-card) {
        width: 100%;
        height: 100%;
        background-color: #f4f4f4;

        .p-card-title {
                color: #2C2C2C;
                font-weight: bold;
        }
}

.text-grad {
        background: linear-gradient(150deg, #97c74e 0%, #2ab9a5 100%);
        background-clip: text;
        opacity: 1;
        color: transparent;
}

.paragraph-title {
        width: 100%;
        text-align: center;
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
        margin: 0 10px;
        background: linear-gradient(150deg, #97c74e 0%, #2ab9a5 100%);
}
</style>