import Vue from 'vue';
import Router from 'vue-router';

import HelloWorld from "@/components/HelloWorld";
import ComponenteB from "@/components/ComponenteB.vue";
import ServicioREST from "@/components/ServicioREST";

Vue.use(Router);

const routes = [
    {
        path:'/hola',
        name:'componete',
        component:HelloWorld
    },
    {
        path:'/',
        name:'home',
        component:ComponenteB
    },
    {
        path:'/servicio',
        name:'servicio',
        component:ServicioREST
    }

];

const router =  new Router({
    mode:'history',
    base:process.env.BASE_URL,
    routes:routes
});

export default router;
