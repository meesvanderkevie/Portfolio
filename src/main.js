import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';
import { createMetaManager } from 'vue-meta';

const app = createApp(App);
app.use(router);
app.use(createMetaManager());
app.mount('#app');