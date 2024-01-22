<script setup>
import {useTaskStore} from '@/stores/task'

const taskStore = useTaskStore();


</script>
<template>
  <div>
    <button @click="taskStore.successAlert">Hello world</button>

    {{taskStore.status}}
  </div>
</template>
