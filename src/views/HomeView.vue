<template>
  <section class="position-relative">
    <div class="asirea-bg" :class="{ 'loaded': imageLoaded }"></div>
    <div class="asirea-title-container p-4 p-md-5">
      <h2 class="asirea text-uppercase display-5 display-md-4">Asociación para el Desarrollo
        <span class="text-grad">Sostenible</span> de la Región Atlántica
      </h2>
      <a role="button" href="/contact" class="btn-contact">
        Contactar
        <i class="bi bi-arrow-right"></i>
      </a>
    </div>
  </section>
  <section class="container d-flex flex-column justify-content-center section-one py-3 py-md-5">
    <div class="row">
      <div class="col-md-6 align-self-center">
        <div class="p-4">
          <div class="years">
            <div class="display-1 fw-bold mb-0">35</div>
            <h2 style="font-size: 2.5rem; margin-bottom: 20px;">
              años</h2>
          </div>
          <p>Mejorando el medio ambiente y fortaleciendo el sector forestal</p>
          <a class="btn btn-outline-light p-3">Explorar servicios!</a>
        </div>
      </div>
      <div class="col-md-6 align-self-center p-4 text-start">
        <h5 class="paragraph-title commitments-title text-start">Nuestros Compromisos</h5>
        <p class="pe-0 pe-lg-5 pb-3 commitment">Promover la producción forestal a través del
          cultivo de madera
          procedente de plantaciones forestales o sistemas agroforestales.</p>
        <p class="pe-0 pe-lg-5 pb-3 commitment">Crear nuevas alternativas de negocios verdes
          para la
          organización y nuestros afiliados.</p>
        <p class="pe-0 pe-lg-5">Crear oportunidades de educación y capacitación entre
          nuestros asociados y las comunidades en donde trabajamos.</p>
      </div>
    </div>
  </section>
  <section class="section-two p-md-5">
    <div class="container">
      <div class="d-flex justify-content-center">
        <h3 class="m-0 position-relative mission-vision">nuestra misión & visión</h3>
      </div>
      <div class="row py-5">
        <div class="col-md-6">
          <div class="mission">
            <h3 class=" text-center">Misión</h3>
            <p class="px-lg-5">ASIREA es una organización que
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
        <div class="col-md-6">
          <div class="vision">
            <h3 class="text-center">Visión</h3>
            <p class="px-lg-5">ASIREA será reconocida como una
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
  </section>
  <section class="section-3 my-3 my-md-5">
    <div class="parallax-layer"></div>
    <div class="container">
      <div class="m-3 m-md-5 pt-4">
        <h3 class="text-uppercase display-6 fw-bold" style="color: #343a40">Trayectoria</h3>
      </div>
      <div class="row">
        <div class="col col-md-6">
          <Timeline :value="events" layout="vertical" class="customized-timeline">
            <template #marker>

            </template>
            <template #content="slotProps">
              <Card class="custom-card shadow-sm">
                <template #content>
                  <p style="font-size: .9em;">{{
                    slotProps.item.parrafo }}
                  </p>
                </template>
              </Card>
            </template>
          </Timeline>
        </div>
        <!-- Galería de imágenes derecha -->
        <div class="d-none d-md-block col-md-6">
          <div class="image-mosaic">
            <div class="mosaic-item large" data-aos="fade-up" data-aos-delay="100">
              <div class="parent rounded-3">
                <div class="overlay"></div>
                <img src="../assets/card.webp" alt="">
              </div>
            </div>

            <div class="mosaic-row">
              <div class="mosaic-item small" data-aos="fade-right" data-aos-delay="200">
                <div class="parent rounded-3">
                  <div class="overlay"></div>
                  <img src="../assets/card1.webp" alt="">
                </div>
              </div>
              <div class="mosaic-item small" data-aos="fade-left" data-aos-delay="300">
                <div class="parent rounded-3">
                  <div class="overlay"></div>
                  <img src="../assets/card2.webp" alt="">
                </div>
              </div>
            </div>

            <div class="mosaic-item medium" data-aos="fade-up" data-aos-delay="400">
              <div class="parent rounded-3">
                <div class="overlay"></div>
                <img src="../assets/card3.webp" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="strategic-plan shadow-sm">

        <div class="left">
          <img src="../assets/plan.jpg" alt="plan">
        </div>
        <div class="right">
          <div class=" w-100 text-sm-start">
            <h3>Nuestros objetivos Estratégicos</h3>
          </div>
          <ol>
            <li>
              <strong>Financiamiento</strong> – Generación de mecanismos de
              financiamiento
              internos y
              externos .
            </li>
            <li>
              <strong>Negocios</strong> – Impulso y Desarrollo modelos de
              negocios
              verdes
              rentables .
            </li>
            <li>
              <strong>Alianzas</strong> – Fortalecimiento de alianzas
              público-privadas.
            </li>
            <li>
              <strong>INTA</strong> – Consolidación de la alianza
              técnica-administrativa con el
              INTA.
            </li>
            <li>
              <strong>Incidencia Político-social</strong> – Impactar en las
              políticas
              sociales,
              económicas y
              ambientales del país.
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { Eventos } from '@/lang/esp.json'
import { onBeforeUnmount, onMounted, ref } from 'vue';
import CarouselComponent from '@/components/CarouselComponent.vue';
import peaks from '@/assets/peaks.webp'
import background from '@/assets/background.webp'

const desktopWinSize = ref(false);
const events = ref(Object.values(Eventos))
const imageLoaded = ref(false)

function updateLayout() {
  desktopWinSize.value = window.matchMedia('(min-width: 769px)').matches ? true : false
}
onMounted(() => {
  preloadImage();
  updateLayout()
  window.addEventListener('resize', updateLayout);
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateLayout)
})

const preloadImage = () => {
  const image = new Image();
  image.onload = () => { imageLoaded.value = true; }
  image.onerror = () => {
    image.src = peaks;
    imageLoaded.value = true
  }
  image.src = background
}
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallaxLayers = Array.from(document.querySelectorAll('.parallax-layer')) as HTMLElement[];

  parallaxLayers.forEach(layer => {
    const speed = 2;
    layer.style.transform = `translateY(${scrolled * speed}px)`;
  });
});
</script>
<style scoped lang="scss">
.asirea-bg {
  width: 100%;
  height: calc(100vh - 80px);
  background-color: #1a1a1a;
  background-size: cover;
  background-position: center center;
  position: relative;
  transition: all 0.3s ease;
}

.asirea-bg.loaded {
  background-image: url('../assets/background.webp');
}

.asirea-bg.loaded::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent);
  z-index: 1;
  opacity: 0;
  animation: fadeInOverlay 0.5s ease forwards;
}

@keyframes fadeInOverlay {
  to {
    opacity: 1;
  }
}

.asirea-title-container {
  @include flexbox($flex-dir: column, $justify-content: start, $align-items: start);
  gap: 30px;
  position: absolute;
  top: 60px;
  left: 40px;
  width: 50%;
  height: 100%;
  z-index: 2;

  .asirea {
    line-height: 1.6;
    font-weight: 610;
    color: #ffffff;
    text-wrap: wrap;
    opacity: 1;
  }

  .btn-contact {
    color: #2C2C0C;
    font-weight: 460;
    width: max-content;
    padding: 12px 20px;
    text-transform: uppercase;
    background-color: #d0d4d9;
    text-decoration: none;
  }
}

::v-deep(.customized-timeline) {

  .p-timeline-event:nth-child(even) {
    flex-direction: row !important;

    .p-timeline-event-content {
      text-align: left !important;
    }
  }

  .p-timeline-event-content {
    margin-bottom: 10px;
  }

  .p-timeline-event-opposite {
    display: none;
    flex: 0;
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
  background: linear-gradient(150deg, darkgreen 0%, var(--p-emerald-800) 100%);
  background-clip: text;
  opacity: 1;
  color: transparent;
}


.paragraph-title {
  font-size: inherit;
  width: 100%;
  font-weight: 600;
  color: var(--title-color);
}

.section-3 {
  background-color: var(--bg-green);
  position: relative;

  .parallax-layer {
    position: absolute;
    width: 100%;
    height: 120%;
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(42,185,165,0.1)"/><circle cx="80" cy="40" r="3" fill="rgba(151,199,78,0.1)"/><circle cx="40" cy="80" r="2" fill="rgba(42,185,165,0.1)"/></svg>');
    animation: float 20s linear infinite;
  }


}

/* Images */
.image-mosaic {
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 100%;
}

.mosaic-item {
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.mosaic-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.mosaic-item.large {
  height: 200px;
}

.mosaic-item.medium {
  height: 150px;
}

.mosaic-item.small {
  height: 120px;
  flex: 1;
}

.mosaic-row {
  display: flex;
  gap: 15px;
}

.parent {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.parent img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.parent:hover img {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(46, 125, 50, 0.3), rgba(76, 175, 80, 0.1));
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.parent:hover .overlay {
  opacity: 1;
}

@keyframes float {
  from {
    transform: translateY(-20px);
  }

  to {
    transform: translateY(20px);
  }
}

.commitments-title {
  color: var(--accent-color);
  margin-bottom: 40px;
  font-size: 2rem;
}

.commitment {
  border-bottom: 1px solid var(--border-color);
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
  box-shadow: 0 8px 15px rgba(45, 125, 96, 0.3);
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
  color: #e6e6ef;
  max-width: 100%;
  position: relative;
  margin: 0 10px;
  background: url('../assets/simple-dashed.png'),
    linear-gradient(150deg, var(--p-emerald-700) 0%, #2ab966 100%);

}

.mission-vision {
  font-weight: 600;
  text-transform: capitalize;
  width: max-content;
}

.mission-vision::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60%;
  height: 3px;
  background-color: var(--p-green-950);
}

.strategic-plan {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 60vh;
  margin-bottom: 2em;
}

.strategic-plan .left {
  img {
    width: 100%;
    height: 100%;
  }
}

.strategic-plan .right {
  padding: 0 3em;
  font-size: .9em;
  color: #e7ebed;
  background: url('../assets/noise.png'),
    linear-gradient(135deg, var(--p-emerald-700), var(--p-emerald-800));
  @include flexbox($flex-dir: column);
  gap: 20px;

  h3 {
    text-transform: uppercase;
  }

  ol li {
    margin-bottom: 12px;
  }

  ol li:last-child {
    margin-bottom: 0;
  }
}

@media (max-width: 992px) {
  .strategic-plan {
    grid-template-columns: 1fr;

    .left {
      padding: 0;

      img {
        aspect-ratio: 16/9;
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
}

@media (max-width: 768px) {
  .asirea-title-container {
    .btn-contact {
      margin-top: 0;
    }

    @include flexbox($flex-dir: column, $align-items: start);
    gap: 20px;
  }

  .asirea-bg.loaded {
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    max-height: 26.5em;
  }

  .asirea-title-container {
    inset: 0;
  }

  .years {
    display: inline-flex;
    gap: 12px;
  }

  .right {
    padding: 27px 1em !important;
  }

  .section-two {
    margin: 0;
    width: 100%;
    background: var(--p-green-700);

    .mission-vision {
      margin-top: 20px !important;
    }

    .row {
      gap: 15px;
    }

    .mission,
    .vision {
      width: 100%;
      padding: 1.6em;
      border-radius: 2px;
      background: url('../assets/navnoise.png'), rgba(237, 243, 251, 0.1);
      border-bottom: 3px solid #393e46;
    }
  }

  .section-two::after {
    display: none;
  }
}

@media (min-width: 768px) and (max-width: 992px) {
  .right {
    padding: 1em 2em 0 !important;
  }

  .asirea-title-container {
    top: 20px;
    left: 20px;
  }
}
</style>
