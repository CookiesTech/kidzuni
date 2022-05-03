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
const Login = Loadable(lazy(() => import('../frontend/login/login')))
const Passwordupdate = Loadable(lazy(() => import('../frontend/login/updatepassword')))
const Forgotpassword = Loadable(lazy(() => import('../frontend/login/forgotpassword')))
const StudentProfile = Loadable(lazy(() => import('../frontend/profile/studentprofile')))
// const Country = Loadable(lazy(() => import('../frontend/home/Flag')))
const Success = Loadable(lazy(() => import('../frontend/testcompleted/success')))
const MathsSubject = Loadable(lazy(() => import('../frontend/Learning/Maths')))
const Recommendation = Loadable(lazy(() => import('../frontend/Learning/Recommendations')))
const MathsTopics = Loadable(lazy(() => import('../frontend/Learning/MathsTopics')))
//const Awards = Loadable(lazy(() => import('../frontend/Learning/Awards')))
const AwardsClasses = Loadable(lazy(() => import('../frontend/Learning/Awards/AwardsClasses')))
const Certificates = Loadable(lazy(() => import('../frontend/Learning/Awards/Certificates')))
const Usage = Loadable(lazy(() => import('../frontend/Analytics/Usage/Usage')))
const QuestionsLog = Loadable(lazy(() => import('../frontend/Analytics/QuestionsLog/QuestionsLog')))
const Progress = Loadable(lazy(() => import('../frontend/Analytics/Progress/Progress')))

const TestCompleted = Loadable(lazy(() => import('../frontend/testcompleted/success')))
const RegisterSuccess = Loadable(lazy(() => import('../frontend/membership/registerSuccess')))

const sessionRoutes = [
    {
        path: '/test_completed-:value',
        element: <TestCompleted />,
    },
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/user/login',
        element: <Login />,
    },
    {
        path: '/login/forgotpassword',
        element: <Forgotpassword />,
    },
    {
        path: '/login/updatepassword',
        element: <Passwordupdate />,
    },

    {
        path: '/standard-:class',
        element: <Standard />,
    },
    {
        path: '/test-:value',
        element: <Test />,
    },
    {
        path: 'home/membership',
        element: <Registration />,
    },
    {
        path: 'membership/register-completed',
        element: <RegisterSuccess />,
    },
    {
        path: 'test-completed',
        element: <Success />,
    },

    {
        path: '/learning/recommendation',
        element: <Recommendation />,
    },

    {
        path: '/learning/maths',
        element: <MathsSubject />,
    },
    {
        path: '/learning/english',
        element: <MathsSubject />,
    },
    {
        path: '/learning/awards',
        element: <AwardsClasses />,
    },
    {
        path: 'home/maths/topics',
        element: <MathsTopics />,
    },

    // {
    //     path: 'awards',
    //     element: <Awards />,
    // },



    {
        path: 'awards/standard/certificates',
        element: <Certificates />,
    },

    {
        path: 'analytics/usage',
        element: <Usage />,
    },
    {
        path: 'analytics/questions-log-:value',
        element: <QuestionsLog />,
    },

    {
        path: '/analytics/progress',
        element: <Progress />,
    },

    {
        path: '/profile-setting',
        element: <StudentProfile />,
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