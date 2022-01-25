import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';

const NotFound = Loadable(lazy(() => import("./NotFound")));
const ForgotPassword = Loadable(lazy(() => import("./ForgotPassword")));
const JwtLogin = Loadable(lazy(() => import("./login/JwtLogin")));
const JwtRegister = Loadable(lazy(() => import("./register/JwtRegister")));
const Home = Loadable(lazy(() => import("../frontend/home")))

const sessionRoutes = [
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/session/signup',
        element: <JwtRegister />,
    },
    {
        path: '/session/signin',
        element: <JwtLogin />,
    },
    {
        path: '/session/forgot-password',
        element: <ForgotPassword />,
    },
    {
        path: '/session/404',
        element: <NotFound />,
    },
]

export default sessionRoutes
