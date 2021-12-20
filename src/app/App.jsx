import '../fake-db'
import React from 'react'
import { Store } from './redux/Store'
import { Provider } from 'react-redux'
import { AuthProvider } from 'app/contexts/JWTAuthContext'
import { useRoutes } from 'react-router-dom'
import { SettingsProvider } from 'app/contexts/SettingsContext'
import { MatxTheme } from 'app/components'
import { AllPages } from './routes/routes'


const App = () => {
    const all_pages = useRoutes(AllPages())

    return (
        <Provider store={Store}>
            <SettingsProvider>
                <MatxTheme>
                    <AuthProvider>{all_pages}</AuthProvider>
                </MatxTheme>
            </SettingsProvider>
        </Provider>
    )
}

export default App
