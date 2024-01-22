<script setup>
import { onMounted } from 'vue'
import PrimaryButton from './PrimaryButton.vue';
import InputLabel from './InputLabel.vue';
import TextInput from './TextInput.vue';
import Textarea from './Textarea.vue';
import {useTaskStore} from '@/stores/task';

const taskStore = useTaskStore();

</script>
<template>
    <header class="flex bg-gray-50 items-center border-b-2 border-orange-400">
      <div class="mx-5">
        <!-- drawer init and show -->
        <div class="text-center">
          <button class="text-blue-700 hover:bg-blue-800 hover:text-white focus:ring-blue-300 font-medium rounded-lg text-xl px-3 py-2 focus:outline-none border border-blue-500" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      <!-- drawer component -->
      <div id="drawer-navigation" class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80" tabindex="-1" aria-labelledby="drawer-navigation-label">    
          <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
            <i class="fa-solid fa-xmark text-xl"></i>
        </button>
        <div class="mt-7">
          <form @submit.prevent="taskStore.getStoreUpdateMethod(taskStore.form, taskStore.edit._id)" action="" class="bg-gray-100 p-2 rounded-md">
            <h3 class="text-center text-lg font-semibold">
              {{ taskStore.edit == '' ? 'Nueva tarea' : 'Editar tarea' }}
            </h3>
            <div class="mt-4">
              <InputLabel for="abbreviation" value="Nombre" />
              <TextInput v-model="taskStore.form.name" type="text" class="block w-full" />
            </div>
            <div class="mt-2">
              <InputLabel for="abbreviation" value="Descripción" />
              <Textarea v-model="taskStore.form.description" class="block w-full" />
            </div>
            <div class="mt-3">
              <PrimaryButton class="w-full" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" >
              {{ taskStore.edit == '' ? 'Guardar registro' : 'Actualizar registro' }}
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
      </div>
      <div class="flex mx-auto text-center">
        <img src="https://cms-ra.ufg.edu.sv/api/assets/sitio-web-ufg/105bb321-48ae-47b7-978a-7a2f050b6727/" class="logo" alt="logo UFG">
      </div>
      
    </header>
</template>
<style scoped>
  .logo {
    width: 250px;
  }
</style>