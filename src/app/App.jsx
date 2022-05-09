import '../fake-db'
import React from 'react'
import { Store } from './redux/Store'
import { Provider } from 'react-redux'
import { AuthProvider } from 'app/contexts/JWTAuthContext'
import { Routes, Route, Navigate, useRoutes } from 'react-router-dom'
import { SettingsProvider } from 'app/contexts/SettingsContext'
import { MatxTheme } from 'app/components'
import { AllPages } from './routes/routes'
import ScrollToTop from "../app/views/frontend/scrollToTop"

const App = () => {
    const all_pages = useRoutes(AllPages())

    return (
        <Provider store={Store}>
            <SettingsProvider>
                <ScrollToTop />
                <MatxTheme>
                    <AuthProvider>
                        {all_pages}
                        <Routes basename={'/kidzUni_frontend'}>
                            <Route path='/' element={<Navigate to="/home" />} />
                        </Routes>
                    </AuthProvider>
                </MatxTheme>
            </SettingsProvider>
        </Provider>
    )
}

export default App
