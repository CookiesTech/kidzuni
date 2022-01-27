import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
import { List } from '@mui/material';


const NotFound = Loadable(lazy(() => import('./NotFound')))
const ForgotPassword = Loadable(lazy(() => import('./ForgotPassword')))
const JwtLogin = Loadable(lazy(() => import('./login/JwtLogin')))
const JwtRegister = Loadable(lazy(() => import('./register/JwtRegister')))
const Home = Loadable(lazy(() => import('../frontend/home/Main')))
const Standard = Loadable(lazy(() => import('../frontend/standard/index')))
const Test = Loadable(lazy(() => import('../frontend/test/QuestionAnswer'))) 

const sessionRoutes = [
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: 'standard-:value',
        element: <Standard />,
    },
    {
        path: 'test',
        element: <Test />,
    },
    {
        path: '/session/signup',
        element: <JwtRegister />,
    },
    {
        path: '/session/signup1',
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
