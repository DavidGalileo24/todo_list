<script setup>
import { onMounted } from 'vue';
import PrimaryButton from '../components/PrimaryButton.vue';
import SecondaryButton from '../components/SecondaryButton.vue';
import Card from '../components/Card.vue';
import Header from '../components/Header.vue';
import {useTaskStore} from '@/stores/task';

const taskStore = useTaskStore();
onMounted(() => {
  taskStore.getTasks();
});

</script>
<template>
  <div class="">
    <Header />
    <div class="mt-5 p-5">
      <!--card-->
      <div class="grid grid-cols-4 gap-3">
        <Card v-for="data in taskStore.tasks" :key="data.id" class="">
          <template #name>
            {{ data.name }}
          </template>
          <template #description>
            {{ data.description }}
          </template>
          <template #footer>
              <PrimaryButton class="mr-1"><i class="fa-solid fa-rotate"></i></PrimaryButton>
              <SecondaryButton class=""><i class="fa-solid fa-trash-can"></i></SecondaryButton>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>