import Vue from 'vue';
import Router from 'vue-router';

import HelloWorld from "@/components/HelloWorld";

Vue.use(Router);

const routes = [
    {
        path:'/hola',
        name:'componete',
        component:HelloWorld
    }

];

const router =  new Router({
    mode:'history',
    base:process.env.BASE_URL,
    routes:routes
});

export default router;
