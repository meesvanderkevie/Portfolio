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
                title: 'Opinie',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Opiniepagina'
                    },
                    {
                        name: 'og:title',
                        content: 'Opinie'
                    },
                    {
                        name: 'og:description',
                        content: 'Opiniepagina'
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
                        content: 'Overpagina'
                    },
                    {
                        name: 'og:title',
                        content: 'Over'
                    },
                    {
                        name: 'og:description',
                        content: 'Overpagina'
                    }
                ]
            }
        },
        {
            path: '/samenvattingen',
            name: 'Samenvattingen',
            component: Samenvattingen,
            meta: {
                title: 'Samenvattingen',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Samenvattingenpagina'
                    },
                    {
                        name: 'og:title',
                        content: 'Samenvattingen'
                    },
                    {
                        name: 'og:description',
                        content: 'Samenvattingenpagina'
                    }
                ]
            }
        },
        {
            path: '/projecten',
            name: 'Projecten',
            component: Projecten,
            meta: {
                title: 'Projecten',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Projectenpagina'
                    },
                    {
                        name: 'og:title',
                        content: 'Projecten'
                    },
                    {
                        name: 'og:description',
                        content: 'Projectenpagina'
                    }
                ]
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    // Use vue-meta to update the meta tags
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
    if (nearestWithMeta) {
      nearestWithMeta.meta.metaTags.forEach(tagDef => {
        const tag = document.createElement('meta');
        Object.keys(tagDef).forEach(key => {
          tag.setAttribute(key, tagDef[key]);
        });
        document.head.appendChild(tag);
      });
    }
  
    // Set the document title
    if (nearestWithMeta && nearestWithMeta.meta.title) {
      document.title = nearestWithMeta.meta.title;
    }
  
    next();
});

export default router;