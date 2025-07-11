<template>
  <div class="dialog-container">
    <dialog class="modal rounded" ref="dialog">
      <div class="content">
        <Vue3Lottie :animation-data="props.icon" :height="100" :width="100" :loop="false" style="margin-top: -15px;">
        </Vue3Lottie>
        <div class="ms-2">
          <h6>{{ props.header }}</h6>
          <p>{{ props.message }}</p>
        </div>
      </div>
      <div class="dlg-buttons">
        <button @click="closeModal">Cerrar</button>
      </div>
    </dialog>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Vue3Lottie } from 'vue3-lottie';

const dialog = ref<HTMLDialogElement | null>(null)
const emit = defineEmits(['close']);

const props = defineProps<{ header: string, message: string, icon: object }>()

onMounted(() => {
  dialog.value?.showModal();
  dialog.value?.classList.add('show')
})
const closeModal = () => {
  dialog.value?.classList.remove('show')
  dialog.value?.classList.add('hide')
  setTimeout(() => {
    dialog.value?.close();
    dialog.value?.classList.remove('hide')
    emit('close');
  }, 300)
}
</script>
<style lang="scss" scoped>
.dialog-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: .8em;

  .modal {
    top: 50%;
    left: 50%;
    position: absolute;
    background-color: var(--bg-body-1);
    width: max-content;
    height: max-content;
    opacity: 0;
    translate: 0px 100px;
    padding: 2em;
    border: none;
    transition: translate .3s ease, opacity .3s ease;
    pointer-events: none;

    .content {
      display: inline-flex;

      h6 {
        font-weight: bold;
      }
    }

    .dlg-buttons {
      button {
        border: none;
        padding: 10px;
        background-color: var(--error-sec-color);
      }
    }
  }

  .modal[open] {
    @include flexbox(column);
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px rgba(var(--black-rgb), .5);

    .dlg-buttons {
      width: 100%;
      @include flexbox($justify-content: center);

      button {
        width: 130px;
        border-radius: 2px;
        font-weight: 300;
      }
    }
  }

  .modal:not([open]) {
    display: none;
  }

  .modal::backdrop {
    backdrop-filter: blur(1px);
  }

  dialog.show {
    translate: 0px 0px;
    opacity: 1;
    pointer-events: auto;
  }

  dialog.hide {
    transform: translateY(-20px);
    opacity: 0;
    pointer-events: none;
  }
}
</style>
