import AuthGuard from 'app/auth/AuthGuard'
import NotFound from 'app/views/sessions/NotFound'
import materialRoutes from 'app/views/material-kit/MaterialRoutes'
import sessionRoutes from 'app/views/sessions/SessionRoutes'
import MatxLayout from '../components/MatxLayout/MatxLayout'

export const AllPages = () => {
    const all_routes = [
        {
            path: '/',
            element: (
                <AuthGuard>
                    <MatxLayout />
                </AuthGuard>
            ),
            children: [...materialRoutes],
        },
        ...sessionRoutes,
        {
            path: '*',
            element: <NotFound />,
        },
    ]

    return all_routes
}
