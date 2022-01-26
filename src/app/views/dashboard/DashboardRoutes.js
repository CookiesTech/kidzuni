import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
import { authRoles } from 'app/auth/authRoles'
const Analytics = Loadable(lazy(() => import('./Analytics')))

const dashboardRoutes = [
    {
        path: '/dashboard/default',
        element: <Analytics />,
        auth: authRoles.sassss,
    },
]

export default dashboardRoutes
