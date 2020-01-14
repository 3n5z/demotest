import Vue from 'vue'
import Vuerouter from "vue-router"
Vue.use(Vuerouter);

const routes = [
    {
        path: '/',
        redirect: "login"
    },
    {
        name: "login",
        path: "/login",
        component: () => import("../views/login.vue")
    },
    {
        name: "main",
        path: "/main",
        component: () => import("../views/main.vue")
    }
]

const router = new Vuerouter({
    // mode: 'history',//配合nginx本地才能正常的使用history模式
    base: process.env.BASE_URL,
    routes
})
export default router