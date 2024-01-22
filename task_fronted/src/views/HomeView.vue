<script setup>
import { onMounted } from 'vue';
import {useTaskStore} from '@/stores/task'

const taskStore = useTaskStore();
onMounted(() => {
  console.log('gg');
});

</script>
<template>
  <div>
    <button @click="taskStore.successAlert">Hello world</button>
    {{taskStore.status}}
  </div>
</template>
