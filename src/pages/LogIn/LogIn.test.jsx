import React from 'react'
import { screen, userEvent } from '@testing-library/react-native'
import LogIn from './LogIn'
import { renderWithProviders } from '../../testUtils/renderWithProviders'

describe('LogIn', () => {
    it('renders demo mode information label', async () => {
        await renderWithProviders(<LogIn />)

        expect(
            screen.getByText(
                'Demo mode: you can use any valid email (like demo@example.com) and any password with 5 or more characters.'
            )
        ).toBeOnTheScreen()
    })

    it('does not show errors for fields the user has not touched', async () => {
        const user = userEvent.setup()
        await renderWithProviders(<LogIn />)

        await user.type(screen.getByLabelText('E-mail'), 'a')

        expect(screen.queryByText('Password is required')).not.toBeOnTheScreen()
    })

    it('shows the e-mail error after the user leaves the field', async () => {
        const user = userEvent.setup()
        await renderWithProviders(<LogIn />)

        // user.type ends with a blur, so the field becomes touched.
        await user.type(screen.getByLabelText('E-mail'), 'not-an-email')

        expect(await screen.findByText('Enter a valid email')).toBeOnTheScreen()
    })

    it('shows every required error on submit', async () => {
        const user = userEvent.setup()
        await renderWithProviders(<LogIn />)

        await user.press(screen.getByRole('button', { name: 'Log in' }))

        expect(await screen.findByText('Email is required')).toBeOnTheScreen()
        expect(screen.getByText('Password is required')).toBeOnTheScreen()
    })

    it('submits valid values', async () => {
        const user = userEvent.setup()
        const log = jest.spyOn(console, 'log').mockImplementation(() => {})
        await renderWithProviders(<LogIn />)

        await user.type(screen.getByLabelText('E-mail'), 'ana@example.com')
        await user.type(screen.getByLabelText('Password'), 'secret123')
        await user.press(screen.getByRole('button', { name: 'Log in' }))

        expect(log).toHaveBeenCalledWith({ email: 'ana@example.com', password: 'secret123' })
        log.mockRestore()
    })
})
