import { createRouter, createWebHistory } from "vue-router";

// Import views
import Home from '@/views/Home.vue';
import Opinie from '@/views/Opinie.vue';
import Over from '@/views/Over.vue';
import Samenvattingen from '@/views/Samenvattingen.vue';
import Projecten from '@/views/Projecten.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/opinie',
            name: 'Opinie',
            component: Opinie
        },
        {
            path: '/over',
            name: 'Over',
            component: Over
        },
        {
            path: '/samenvattingen',
            name: 'Samenvattingen',
            component: Samenvattingen
        },
        {
            path: '/projecten',
            name: 'Projecten',
            component: Projecten
        }
    ]
})

export default router;