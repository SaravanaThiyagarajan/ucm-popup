import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css';
import './assets/main.css'
Vue.use(PiniaVuePlugin)
const pinia = createPinia()

new Vue({
  render: (h) => h(App),pinia
}).$mount('#app')
