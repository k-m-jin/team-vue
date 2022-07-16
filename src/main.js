import { createApp } from 'vue'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

createApp(App).use(store).use(ElementPlus).mount('#app')
