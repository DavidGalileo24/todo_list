<script setup>
import { onMounted } from 'vue';
import {useTaskStore} from '@/stores/task';
import PrimaryButton from '../components/PrimaryButton.vue';
import SecondaryButton from '../components/SecondaryButton.vue';
import DarkButton from '../components/DarkButton.vue';
import Card from '../components/Card.vue';
import Header from '../components/Header.vue';
import DialogModal from '../components/DialogModal.vue';

const taskStore = useTaskStore();
onMounted(() => {
  taskStore.getTasks();
});
defineProps({
    maxWidth: {
      type: String,
      default: 'md',
    },
});

</script>
<template>
  <div class="">
    <Header />
    <div class="mt-5 p-5">
      <!--card-->
      <div class="grid sm:grid-cols-3 md:grid-cols-4 grid-cols-2 gap-3">
        <Card v-for="data in taskStore.tasks" :key="data.id" class="">
          <template #name>
            {{ data.name }}
          </template>
          <template #description>
            {{ data.description }}
          </template>
          <template #footer>
              <PrimaryButton @click="taskStore.editData(data)" class="mr-1" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation" >
                <i class="fa-solid fa-rotate"></i>
              </PrimaryButton>
              <SecondaryButton class="" @click="taskStore.showDeleteModal(data._id)">
                <i class="fa-solid fa-trash-can"></i>
              </SecondaryButton>
          </template>
        </Card>
        <DialogModal :max-width="maxWidth" :show="taskStore.deleteModal" @close="taskStore.closeDeleteModal()">
            <template #content>
                <p class="text-center text-lg">
                    ¿Seguro que desea eliminar la tarea seleccionada?
                </p>
            </template>
            <template #footer>
                <DarkButton class="mr-1" @click="taskStore.closeDeleteModal()">
                    Cancelar
                </DarkButton>
                <SecondaryButton @click="taskStore.deleteTask(taskStore.id)">
                    Eliminar
                </SecondaryButton>
            </template>
        </DialogModal>
      </div>
    </div>
  </div>
</template>