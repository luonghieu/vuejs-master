import Dashboard from './components/admin/Dashboard';
import NotFound from './components/admin/NotFound';
import Elements from './components/admin/Elements';
import Tables from './components/admin/Tables';

let routes = [
    {
        path: '/',
        component: Dashboard,
        name: 'dashboard',
    },
    {
        path: 'elements',
        component: Elements,
        name: 'elements',
    },
    {
        path: 'tables',
        component: Tables,
        name: 'tables',
    },
    {
        path: '*',
        component: NotFound,
    },
];

export default routes;