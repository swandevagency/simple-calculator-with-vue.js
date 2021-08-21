import {createRouter, createWebHistory} from 'vue-router'
import CalculatorButtons from '../views/CalculatorButtons'
import HomePage from './../views/index.vue'


const routes = [
    {
        path:'/',
        name:'HomePage',
        component: HomePage
    },
    {
        path:'/CalculatorButtons',
        name:'CalculatorButtons',
        component: CalculatorButtons
    }
]

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})


export default router