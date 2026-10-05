import React from 'react'
import { render } from '@testing-library/react-native'
import { MemoryRouter } from 'react-router'
import { ThemeProvider } from '../theme'

export const renderWithProviders = (ui, { route = '/' } = {}) =>
    render(
        <ThemeProvider>
            <MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>
        </ThemeProvider>
    )
