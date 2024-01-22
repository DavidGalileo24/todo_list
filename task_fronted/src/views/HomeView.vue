<script setup>
import Swal from 'sweetalert2'

const showAlert = () =>{
  Swal.fire({
    toast: true,
    icon: 'success',
    title: '¡Tarea guardada satisfactoriamente!',
    position: 'bottom-right',
    iconColor: 'white',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });
}
</script>
<template>
  
  <button @click="showAlert">Hello world</button>
</template>
