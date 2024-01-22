import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'


export const useTaskStore = defineStore('task', {
    state: () => ({
        status: 'Desde store pa!'
    }),
    actions: {
        async successAlert() {
            await Swal.fire({
                toast: true,
                icon: 'success',
                title: '¡Tarea guardada satisfactoriamente!',
                position: 'bottom-right',
                iconColor: 'white',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true
            })
        }
    }

});
