import vueRouter from 'vue-router'
import Products from './components/Products'
import UserAuth from './components/UserAuth'
import Profile from './components/Profile'
import App from './App'

const router = new vueRouter({
        mode: 'history',
        base: __dirname,
        routes: [
            {
                path: '/',
                name: "root",
                component: App
            },
            {
                path: '/products',
                name: "products",
                component: Products
            },
            {
                path: '/user/profile',
                name: "profile",
                component: Profile
            },
            {
                path: '/user/auth',
                name: "user_auth",
                component: UserAuth
            },
        ]
    })

export default router
