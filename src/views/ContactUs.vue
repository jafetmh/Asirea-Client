<template>
    <div class="d-flex flex-column">
        <div class="header-image-container">
            <div class="overlay"></div>
            <img src="../assets/felajilo.jpg" alt="asirea">
        </div>
        <div class="contact-us">
            <div class="contact-content">
                <div class="container">
                    <h2 class="tittle">Contactar</h2>
                    <div class="row">
                        <div class="col-md-6">
                            <p>Puede ponerse en contacto con nosotros para cualquier cuestión relacionada con nuestros
                                servicios. Nos pondremos en contacto con usted lo antes posible.</p>
                            <form @submit.prevent="">
                                <div class="form-floating mb-3 pt-3">
                                    <input type="text" class="form-control custom-input" id="floatingInput"
                                        placeholder="nombre">
                                    <label for="floatingInput">Tu nombre</label>
                                </div>
                                <div class="form-floating mb-3 pt-3">
                                    <input type="tel" class="form-control custom-input" id="floatingInput"
                                        placeholder="telefono">
                                    <label for="floatingInput">Telefono</label>
                                </div>
                                <div class="form-floating mb-3 pt-3">
                                    <input type="email" class="form-control custom-input" id="floatingInput1"
                                        placeholder="name@example.com">
                                    <label for="floatingInput1">Correo electronico</label>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="floatingTextareaDisabled">En que podemos
                                        ayudarte?</label>
                                    <textarea class="form-control custom-input" placeholder="Escribe tu solicitud aca"
                                        rows="4" id="floatingTextarea"></textarea>
                                </div>
                                <div class="submit text-center">
                                    <input type="submit" class="btn btn-outline-light" value="Contactar">
                                </div>
                            </form>
                        </div>
                        <div class="col-md-4 ms-auto px-0">
                            <div class="info-wrapper">
                                <div class="info info-horizontal">
                                    <div class="icon icon-primary">
                                        <i class="bi bi-geo-alt"></i>
                                    </div>
                                    <div class="description">
                                        <h4 class="info-title">Ubicacion</h4>
                                        <p> Barrio Diamantes, Guapiles, Pococi
                                            Limon
                                        </p>
                                    </div>
                                </div>
                                <div class="info info-horizontal">
                                    <div class="icon icon-primary">
                                        <i class="bi bi-telephone"></i>
                                    </div>
                                    <div class="description">
                                        <h4 class="info-title">Tel.</h4>
                                        <p>{{ ASIREA_PHONE_NUMBER }}</p>
                                    </div>
                                </div>
                                <div class="info info-horizontal">
                                    <div class="icon icon-primary">
                                        <i class="bi bi-envelope"></i>
                                    </div>
                                    <div class="description">
                                        <h4 class="info-title">Correo electronico.</h4>
                                        <p>{{ ASIREA_EMAIL }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ASIREA_EMAIL, ASIREA_PHONE_NUMBER } from '@/const';
</script>
<style lang="scss" scoped>
.header-image-container {
    height: 55vh;
    width: 100%;
    overflow: hidden;
    z-index: -1;
    position: relative;
    overflow: hidden;

    img {
        z-index: 1;
        height: 100%;
        width: 100%;
    }
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.6);
    transition: background-color 0.3s ease;
}

.contact-us {
    background-color: var(--bg-body);
    z-index: 1;
    margin: -60px 10px 30px;
    border-radius: 6px;
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, .14), 0 6px 30px 5px rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .2);

    .contact-content {
        padding-bottom: 40px;
        padding-top: 40px;

        .tittle {
            font-weight: bold;
            margin-bottom: 1rem;
            color: var(--title-color)
        }

        label,
        .form-control~label {
            padding-left: 0;
            background-color: transparent;
            transition: all 0.3 ease;
        }

        .form-control,
        .form-control:focus {
            background-color: var(--bg-body);
            color: var(--text-color-1);
        }

        .custom-input {
            border: none;
            border-bottom: 2px solid #ccc;
            border-radius: 0;
            padding-left: 0;
            box-shadow: none;
            caret-color: var(--accent-color);
            transition: border-color 0.3s;
        }

        .custom-input:focus {
            border-bottom: 2px solid var(--accent-color);
            outline: none;
            box-shadow: none;
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
            padding: 10px 40px;
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
    }
}

.dark-mode .contact-us .contact-content .form-control:focus~label {
    padding-left: .75rem;
}

@include respond-to(desktop) {
    .contact-us {
        margin: -60px 30px 30px;
    }
}

.info-wrapper {
    padding: 20px 30px;
    border: none;
    border-radius: 10px;
    background-color: var(--bg-green-1);

    .info {
        padding-bottom: 10px;
        padding-top: 0;
    }

    .info {
        max-width: 360px;
        margin: 0 auto;
        padding: 20px 0 30px;
    }

    .info-horizontal .icon {
        float: left;
        margin-right: 10px;
    }

    .info-title {
        color: #2c2c2c;
        font-weight: bold;
    }

    .icon.icon-primary {
        color: var(--accent-color);
        font-size: 30px;
    }
}
</style>