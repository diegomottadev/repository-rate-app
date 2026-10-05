import React from 'react'
import { MemoryRouter } from 'react-router'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from './src/theme'
import Main from './src/Main'

export default function App() {
    return (
        <ThemeProvider>
            {/* The app bar is dark in both color schemes. */}
            <StatusBar style='light' />
            <MemoryRouter>
                <Main />
            </MemoryRouter>
        </ThemeProvider>
    )
}
