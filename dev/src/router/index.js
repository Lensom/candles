import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router);
import Index from '@/components/pages/Index';

const router = new Router({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        }
    ]
})

export default router;
