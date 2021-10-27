import VueRouter from 'vue-router'
import AdminRoute from './admin-routes'

import AdminApp from './components/admin/AdminApp'
import Login from './components/admin/Login'

let routes = [
    {
        path: '/backend',
        component: AdminApp,
        children: AdminRoute,
    },
    {
        path: '/backend',
        component: Login,
        name: Login,
    },
];

export default new VueRouter({
    routes: routes,
    mode: 'history',
})
