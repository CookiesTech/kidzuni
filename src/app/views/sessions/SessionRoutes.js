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
const Registration = Loadable(lazy(() => import('../frontend/membership/registration'))) 
const Cart = Loadable(lazy(() => import('../frontend/membership/cart')))
const Login = Loadable(lazy(() => import('../frontend/login/login')))
const Forgotpassword = Loadable(lazy(() => import('../frontend/login/forgotpassword')))
const Forgotusername = Loadable(lazy(() => import('../frontend/login/forgotusername')))



const sessionRoutes = [
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/login/forgotpassword',
        element: <Forgotpassword />,
    },
    {
        path: '/login/forgotusername',
        element: <Forgotusername />,
    },
    
    {
        path: '/cart',
        element: <Cart />,
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
        path: 'membership',
        element: <Registration />,
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
