<template>
    <div class="d-flex flex-column">
        <div class="header-image-container">
            <div class="overlay"></div>
            <img src="../assets/peaks.png" alt="asirea">
        </div>
        <div class="contact-us">
            <div class="contact-content">
                <div class="container">
                    <h2 class="tittle">Contactar</h2>
                    <div class="row">
                        <div class="col-md-6">
                            <p>Puede ponerse en contacto con nosotros para cualquier cuestión relacionada con nuestros
                                servicios. Nos pondremos en contacto con usted lo antes posible.</p>
                            <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues"
                                @submit="onFormSubmit" class="d-flex flex-column gap-4 w-100">
                                <div class="flex flex-col gap-1">
                                    <FloatLabel variant="in">
                                        <InputText id="inputname" name="name" variant="filled" size="large"
                                            class="input-text" />
                                        <label for="inputname">Nombre Completo</label>
                                    </FloatLabel>
                                    <Message v-if="$form.name?.invalid" severity="error" size="small" variant="simple">
                                        {{ $form.name.error?.message }}</Message>
                                </div>
                                <div class="flex flex-col gap-1">
                                    <FloatLabel variant="in">
                                        <InputMask id="phone" name="tel" mask="9999-9999" fluid />

                                        <label for="inputtel">Teléfono </label>
                                    </FloatLabel>
                                    <Message v-if="$form.tel?.invalid" severity="error" size="small" variant="simple">{{
                                        $form.tel.error?.message }}</Message>
                                </div>
                                <div class="flex flex-col gap-1">
                                    <FloatLabel variant="in">
                                        <InputText id="inputemail" name="email" variant="filled" class="input-text" />
                                        <label for="inputemail">Correo Electrónico</label>
                                    </FloatLabel>
                                    <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">
                                        {{
                                            $form.email.error?.message }}</Message>
                                </div>
                                <FloatLabel variant="in">
                                    <Textarea id="messageTxt" name="message" rows="5" style="resize: none" />
                                    <label for="messageTxt">Mensaje</label>
                                </FloatLabel>
                                <div class="submit text-center">
                                    <input type="submit" class="btn btn-outline-light" value="Contactar">
                                </div>
                            </Form>
                        </div>
                        <div class="col-md-4 ms-auto px-sm-2">
                            <div class="info info-horizontal">
                                <div class="icon icon-primary">
                                    <i class="bi bi-pin-map"></i>
                                </div>
                                <div class="description">
                                    <h4 class="info-title">Ubicación</h4>
                                    <p> Barrio Diamantes, Guápiles, Pococí
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
                                    <h4 class="info-title">Correo Electrónico.</h4>
                                    <p>{{ ASIREA_EMAIL }}</p>
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

import InputText from 'primevue/inputtext';

import { ref } from 'vue';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';

const initialValues = ref({
    name: '',
    tel: '',
    email: '',
    message: ''
});

const resolver = ref(zodResolver(
    z.object({
        name: z.string().min(1, { message: 'El nombre es requerido.' }),
        tel: z.string().min(1, { message: 'El número de teléfono es requerido.' }),
        email: z.string().email({ message: 'Correo electrónico invalido.' })
    })
));


</script>
<style lang="scss" scoped>
.header-image-container {
    height: 55vh;
    width: 100%;
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
    background-color: var(--bg-green);
    z-index: 1;
    margin: -60px 10px 30px;
    border-radius: 5px;
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, .14), 0 6px 30px 5px rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .2);

    .contact-content {
        padding: 40px 0;

        .tittle {
            font-weight: bold;
            margin-bottom: 1rem;
            color: #343a40;
            text-transform: uppercase;
        }

        .input-text {
            width: 100%;
        }

        label {
            font-size: .8em;
            font-weight: normal;
            text-transform: capitalize;
        }

        ::v-deep(.p-textarea) {
            width: 100%;
            max-width: 100%;
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

::v-deep(.p-floatlabel-in:has(input:focus)) {
    label {
        font-size: 0.80em;
    }
}

::v-deep(.p-floatlabel-in:has(textarea:focus)) {
    label {
        font-size: 0.80em;
    }
}

::v-deep(.p-inputtext:enabled:focus) {
    box-shadow: 0 8px 15px rgba(45, 125, 96, 0.3);
}

@include respond-to(desktop) {
    .contact-us {
        margin: -60px 30px 30px;
    }
}


.info {
    padding-bottom: 10px;
    padding-top: 0;
    border-bottom: 1px solid var(--border-color);
}

.info {
    max-width: 360px;
    margin: 0 auto;
    padding: 20px 0 10px;
}

p {
    color: #3c414a;
}

.info-horizontal .icon {
    float: left;
    margin-right: 10px;
}

.info-title {
    text-transform: capitalize;
    color: #343a40;
    font-weight: bold;
}

.icon.icon-primary {
    color: var(--accent-color);
    font-size: 22px;
}

@media (max-width: 768px) {
    .header-image-container {
        max-height: 30vh;
    }

    .contact-us .contact-content {
        font-size: .9em;
    }

    .contact-us .contact-content {
        padding: 40px 12px;
    }
    .contact-us .contact-content .btn {
        width: 100%;
    }
}
</style>