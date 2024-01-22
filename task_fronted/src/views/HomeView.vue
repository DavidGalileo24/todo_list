<script setup>
import { onMounted } from 'vue';
import {useTaskStore} from '@/stores/task'

const taskStore = useTaskStore();
onMounted(() => {
  taskStore.getTasks();
});

</script>
<template>
  <div>
    <button @click="taskStore.successAlert">Hello world</button>
    {{taskStore.tasks}}
  </div>
</template>
