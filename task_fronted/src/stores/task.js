import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'
import { initFlowbite } from 'flowbite'

export const useTaskStore = defineStore('task', {
    state: () => ({
        id: '',
        task: [],
        tasks: [],
        edit: '',
        deleteModal: false,
        sidebar: '',
        form: {
            name: '',
            description: ''
        }
    }),
    actions: {
        async getTasks(){
            await axios.get('/tasks').then((res) => {
                this.tasks = res.data.data;
            }).catch((e) => {
                console.log(e);
            })
        },
        async getTaskById(data){
            await axios.get('/tasks/' + data._id).then((res) => {
                this.task = res.data;
            }).catch((e) => {
                console.log(e);
            })
        },
        async storeTask(data){
            console.log('entra en store', data);
            await axios.post('/tasks', {
                'name': data.name,
                'description': data.description
            }).then((res) => {
                let flag = 0;
                this.getTasks();
                this.successAlert('guardada');
                this.reset();
            }).catch((e) => {
                console.log(e);
            })
        },
        async updateTask(data, id){
            console.log('entra en update', data);
            await axios.put('/tasks/' + id, {
                'name': data.name,
                'description': data.description,
            }).then((res) => {
                let flag = 0;
                this.getTasks();
                this.successAlert('actualizada');
                this.reset();
            }).catch((e) => {
                console.log(e);
            })
        },
        async deleteTask(id){
            await axios.delete('/tasks/' + id).then((res) => {
                this.successAlert('eliminada');
                this.getTasks();
                this.closeDeleteModal();
            }).catch((e) => {
                console.log(e);
            })
        },
        getStoreUpdateMethod(data, id){
            id ? this.updateTask(data, id) : this.storeTask(data);
        },
        editData(data){
            let edit = this.tasks.find((el) => el._id == data._id);
            this.edit = data;
            if(edit){
                this.form.name = edit.name;
                this.form.description = edit.description;
            }
        },
        reset(){
            this.form.name = '';
            this.form.description = '';
        },
        showDeleteModal(id){
            this.id = id;
            this.deleteModal = true;
        },
        closeDeleteModal(){
            this.deleteModal = false;
        },
        async successAlert(flag) {
            await Swal.fire({
                toast: true,
                icon: 'success',
                title: '¡Tarea ' + flag + ' satisfactoriamente!',
                position: 'bottom-right',
                iconColor: 'white',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true
            })
        }
    }

});
