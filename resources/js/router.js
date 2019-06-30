import Vue from 'vue'
import VueRouter from 'vue-router'

// pages
import Login from './pages/Login.vue'
import ItamiDataList from './pages/ItamiData/List.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: ItamiDataList
	},
	{
		path: '/login',
		component: Login
	}
]

const router = new VueRouter({
    mode: 'history',
	routes
})


export default router
