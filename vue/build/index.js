import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default function createRouter(){
    return new Ruuter({
        mode:'history',
        routes:[
            {
                alias:'/',
                path:'/login',
                component:()=>import('../pages/login.vue')
            }
        ]
    })
}