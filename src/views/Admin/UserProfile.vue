<template>
    <div id="wrapper"
        class="d-flex flex-container align-items-center mx-md-3 mt-md-2 my-xl-2 mx-xl-5 shadow">
        <div class="avatar-container">
            <img :src="profileImgUrl" alt="avatar" width="150px" height="150px" class="rounded-circle m-3">
            <Transition name="slide-fade">
                <button v-if="!isInputDisabled" class="camera-btn" @click="openFileInput">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px">
                        <path
                            d="M480-260q75 0 127.5-52.5T660-440q0-75-52.5-127.5T480-620q-75 0-127.5 52.5T300-440q0 75 52.5 127.5T480-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l74-80h240l74 80h126q33 0 56.5 23.5T880-680v480q0 33-23.5 56.5T800-120H160Z" />
                    </svg>
                </button>
            </Transition>
            <input type="file" ref="fileInput" accept="image/*" @change="onFileSelected" style="display: none;">
        </div>
        <div class="card my-2 p-3" :class="{ 'extended my-3': !isInputDisabled }">
            <div class="card-header d-flex justify-content-between">
                <h6 class="card-title m-2">Informacion del perfil</h6>
                <ButtonComponent :rounded="false" :label="''" :isIcon="Edit" @click="toggleInputs" />
            </div>
            <div class="card-body">
                <div class="form">
                    <div class="form-floating ">
                        <InputComponent id="name" type="text" placeholder="Nombre" v-model="profile.name"
                            :value="profile.name" :disabled="isInputDisabled" />
                        <label for="name">Nombre</label>
                    </div>
                    <div class="form-floating">
                        <InputComponent id="lastname" type="text" placeholder="Apellido" v-model="profile.lastName"
                            :value="profile.lastName" :disabled="isInputDisabled" />
                        <label for="lastname">Apellido</label>
                    </div>
                    <div class="form-floating ">
                        <InputComponent id="username" type="text" placeholder="Nombre de usuario"
                            v-model="profile.username" :value="profile.username" :disabled="isInputDisabled" />
                        <label for="username">Nombre de usuario</label>
                    </div>
                    <div class="form-floating">
                        <InputComponent id="email" type="email" placeholder="Correo electronico" v-model="profile.email"
                            :value="profile.email" :disabled="isInputDisabled" />
                        <label for="email">Correo electronico</label>
                    </div>
                </div>
            </div>
            <Transition name="slide-fade">
                <div v-if="!isInputDisabled" class="card-footer">
                    <div class="d-flex justify-content-between">
                        <ButtonComponent :label="'Cancelar'" @click="toggleInputs" />
                        <ButtonComponent :label="'Guardar'" />
                    </div>
                </div>
            </Transition>
        </div>
    </div>
</template>
<script setup lang="ts">
import InputComponent from '@/components/InputComponent.vue';
import { Edit } from '@/components/icons';
import ButtonComponent from '@/components/ButtonComponent.vue';
import { ref } from 'vue';

const isInputDisabled = ref(true);
const profileImgUrl = ref<string>(new URL("../../assets/fotos.jpg", import.meta.url).href);
const fileInput = ref<HTMLInputElement | null>(null);

const toggleInputs = () => {
    isInputDisabled.value = !isInputDisabled.value;
}
const openFileInput = () => {
    fileInput.value?.click();
}

const onFileSelected = (event: Event) => {

    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
        profileImgUrl.value = URL.createObjectURL(input.files[0]);
    }
}

interface AdminProfile {
    name?: String,
    lastName?: String,
    username: String,
    email: String
}

const profile = ref<AdminProfile>({
    name: 'Jhon',
    lastName: 'Dhoe',
    username: 'jdhoe',
    email: 'jhondhoe@gmail.com'
});

</script>

<style scoped lang="scss">
@include respond-to(mobile) {

    #wrapper {
        padding: 20px 20px 0 20px;
        margin-bottom: 20px;

        .card {
            width: 20rem;
        }
    }

    .flex-container {
        flex-direction: column;
    }

    .avatar-container {
        padding: 1rem;
        margin-bottom: 1rem;

        .camera-btn {
            bottom: 10px;
            right: 13px;
        }
    }
}

@include respond-to(desktop) {

    .flex-container {
        min-height: 542.25px;
        justify-content: space-evenly;
        padding: 2rem .4rem 2rem .4rem;
    }
    .avatar-container {
        padding: 1rem;
        margin: .5rem;
        height: 260px;
        width: 300px;

        .camera-btn {
            bottom: 16px;
            right: 25px;
        }
    }
}


.avatar-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    background-color: var(--bg-body-1);

    .camera-btn {
        position: absolute;
        width: 40px;
        height: 40px;
        background-color: var(--bg-body);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        cursor: pointer;
        box-shadow: 0 2px 4px rgba(var(--black-rgb), 0.3);
    }
}

.card {
    height: 391.44px;
    width: 25rem;
    transition: height 0.5s ease-in-out;
    interpolate-size: allow-keywords;

    .card-header {
        .card-title {
            width: max-content;
        }
    }

    .form-floating {
        width: 100%;
        margin: .5em;
    }

    button,
    button:active {
        color: rgba(var(--bg-secondary-rgb), 1);
        border-color: var(--border-color);
    }

    button {
        transition: transform .3s ease-in-out;
    }

    button:active {
        transform: scale(0.96);
    }

    .slide-fade-enter-active {
        transition: all 0.5s ease-out;
    }

    .slide-fade-leave-active {
        transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
        transform: translateY(20px);
        opacity: 0;
    }

    .card-footer {
        border: 1px solid var(--border-color);
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        background-color: var(--bg-body-1);
    }
}

.card.extended {
    height: auto;
}

svg {
    fill: rgba(var(--bg-secondary-rgb), 1);
}
</style>