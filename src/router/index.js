import { createRouter, createWebHistory } from "vue-router";

// Import views
import Home from '@/views/Home.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        }
    ]
})

export default router;