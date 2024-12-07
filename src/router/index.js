import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Opinie from '@/views/Opinie.vue';
import Over from '@/views/Over.vue';
import Samenvattingen from '@/views/Samenvattingen.vue';
import Projecten from '@/views/Projecten.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Homepagina',
            metaTags: [
                {
                    name: 'description',
                    content: 'De homepagina van de website van de studentenvereniging voor informatica studenten aan de Hogeschool Rotterdam.'
                },
                {
                    property: 'og:title',
                    content: 'Homepagina'
                },
                {
                    property: 'og:description',
                    content: 'De homepagina van de website van de studentenvereniging voor informatica studenten aan de Hogeschool Rotterdam.'
                }
            ]
        }
    },
    {
        path: '/opinie',
        name: 'Opinie',
        component: Opinie,
        meta: {
            title: 'Opiniepagina',
            metaTags: [
                {
                    name: 'description',
                    content: 'De opiniepagina van onze voorbeeldapp.'
                },
                {
                    property: 'og:title',
                    content: 'Opiniepagina'
                },
                {
                    property: 'og:description',
                    content: 'De opiniepagina van onze voorbeeldapp.'
                }
            ]
        }
    },
    {
        path: '/over',
        name: 'Over',
        component: Over,
        meta: {
            title: 'Overpagina',
            metaTags: [
                {
                    name: 'description',
                    content: 'De overpagina van onze voorbeeldapp.'
                },
                {
                    property: 'og:title',
                    content: 'Overpagina'
                },
                {
                    property: 'og:description',
                    content: 'De overpagina van onze voorbeeldapp.'
                }
            ]
        },
    },
    {
        path: '/samenvattingen',
        name: 'Samenvattingen',
        component: Samenvattingen,
        meta: {
            title: 'Samenvattingenpagina',
            metaTags: [
                {
                    name: 'description',
                    content: 'De samenvattingenpagina van onze voorbeeldapp.'
                },
                {
                    property: 'og:title',
                    content: 'Samenvattingenpagina'
                },
                {
                    property: 'og:description',
                    content: 'De samenvattingenpagina van onze voorbeeldapp.'
                }
            ]
        }
    },
    {
        path: '/projecten',
        name: 'Projecten',
        component: Projecten,
        meta: {
            title: 'Projectenpagina',
            metaTags: [
                {
                    name: 'description',
                    content: 'De projectenpagina van onze voorbeeldapp.'
                },
                {
                    property: 'og:title',
                    content: 'Projectenpagina'
                },
                {
                    property: 'og:description',
                    content: 'De projectenpagina van onze voorbeeldapp.'
                }
            ]
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    // Use the meta tags from the route's meta object
    if (to.meta.metaTags) {
        to.meta.metaTags.forEach(tagDef => {
            const tag = document.createElement('meta');

            Object.keys(tagDef).forEach(key => {
                tag.setAttribute(key, tagDef[key]);
            });

            // We use this to track which meta tags we create so we don't interfere with other ones
            tag.setAttribute('data-vue-router-controlled', '');

            document.head.appendChild(tag);
        });
    }

    // Set the document title
    if (to.meta.title) {
        document.title = to.meta.title;
    }

    next();
});

export default router;