import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'

const Dashboard = Loadable(lazy(() => import('../dashboard/Analytics')))
const TeachersList = Loadable(lazy(() => import('../admin/Teachers/List')))
const TeachersAdd = Loadable(
    lazy(() => import('../admin/Teachers/Add-teachers'))
)

const materialRoutes = [
    {
        path: '/admin/dashboard',
        element: <Dashboard />,
    },
    {
        path: '/admin/Teachers/List',
        element: <TeachersList />,
    },
    {
        path: '/admin/Teachers/add_teacher',
        element: <TeachersAdd />,
    },
]

export default materialRoutes
