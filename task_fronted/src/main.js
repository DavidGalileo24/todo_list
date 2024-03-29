import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import FloatingVue from 'floating-vue';
import 'floating-vue/dist/style.css';
import './axios.js';
import App from './App.vue';
import router from './router';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueSweetalert2)
app.use(FloatingVue)

app.mount('#app')
