<script setup>
import { onMounted } from 'vue';
import PrimaryButton from '../components/PrimaryButton.vue';
import Card from '../components/Card.vue';
import {useTaskStore} from '@/stores/task';

const taskStore = useTaskStore();
onMounted(() => {
  taskStore.getTasks();
});

</script>
<template>
  <div>
    <!--<PrimaryButton @click="taskStore.successAlert">Hello world</PrimaryButton>
    {{taskStore.tasks}}-->
    <Card v-for="data in taskStore.tasks" :key="data.id">
      <template #name>
        {{ data.name }}
      </template>
      <template #description>
        {{ data.description }}
      </template>
      <template #footer>
        {{ data.created_date }}
      </template>
    </Card>
  </div>
</template>
