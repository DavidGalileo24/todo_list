<script setup>
import { inject } from 'vue'
import Swal from 'sweetalert2'

const showAlert = () =>{
  Swal.fire('Something went wrong.');
}
</script>

<template>
  
  <button @click="showAlert">Hello world</button>
</template>
