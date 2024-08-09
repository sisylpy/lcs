import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/enterprise',
        name: 'Enterprise',
        component: () => import('../views/enterprise/Index.vue'),
    },
    {
        path: '/enterprise/directStore',
        name: 'DirectStore',
        component: () => import('../views/enterprise/DirectStore.vue'),
    },
    {
        path: '/enterprise/directStore/DS_Benefit',
        name: "DS_Benefit",
        component: () => import('../views/enterprise/benifitViews/DS_Benefit.vue'),
    }, {
        path: '/enterprise/directStore/special',
        name: 'special',
        component: () => import('../views/enterprise/benifitViews/Special.vue'),
    },
    {
        path: '/enterprise/franchiseStore',
        name: 'franchiseStore',
        component: () => import('../views/enterprise/FranchiseStore.vue')
    }, {
        path: '/enterprise/windowStore',
        name: 'WindowStore',
        component: () => import('../views/enterprise/WindowStore.vue')
    }, {
        path: '/enterprise/centralKitchen',
        name: 'CentralKitchen',
        component: () => import('../views/enterprise/CentralKitchen.vue')
    },



]

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        }
    }

})

export default router
