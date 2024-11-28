import './assets/main.css'
import { createApp } from 'vue'
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)
app.use(VueMeta, {
    keyName: 'head'
})
app.use(router)
app.mount('#app')