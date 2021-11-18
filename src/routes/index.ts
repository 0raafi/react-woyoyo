import { RouteConfig } from 'react-router-config'
import Loadable from '@loadable/component';

const One = Loadable(/* #__LOADABLE__ */() => import(/* webpackChunkName: "One" */ './One'));
const Two = Loadable(/* #__LOADABLE__ */() => import(/* webpackChunkName: "Two" */ './Two'));
const Layout = Loadable(/* #__LOADABLE__ */() => import(/* webpackChunkName: "Home" */ '../components/Layout'));

export default <RouteConfig[]>[
    {
        component: Layout,
        routes: [
            {
                path: "/one",
                exact: true,
                component: One
            },
            {
                path: "/two",
                exact: true,
                component: Two
            },
        ]
    }
];