import React from 'react'
import { screen, userEvent } from '@testing-library/react-native'
import Main from './Main'
import { getRepositories } from './api/repositories'
import { renderWithProviders } from './testUtils/renderWithProviders'

jest.mock('./api/repositories')

describe('Main navigation', () => {
    beforeEach(() => getRepositories.mockResolvedValue([]))

    it('starts on the repositories tab', async () => {
        await renderWithProviders(<Main />)

        expect(screen.getByRole('tab', { name: 'Repositories' })).toBeSelected()
        expect(await screen.findByText('No repositories yet')).toBeOnTheScreen()
    })

    it('moves to the sign in screen', async () => {
        const user = userEvent.setup()
        await renderWithProviders(<Main />)

        await user.press(screen.getByRole('tab', { name: 'Sign In' }))

        expect(screen.getByRole('tab', { name: 'Sign In' })).toBeSelected()
        expect(screen.getByRole('tab', { name: 'Repositories' })).not.toBeSelected()
        expect(screen.getByRole('heading', { name: 'Sign in' })).toBeOnTheScreen()
    })

    it('sends unknown routes to the repositories list', async () => {
        await renderWithProviders(<Main />, { route: '/does-not-exist' })

        expect(await screen.findByText('No repositories yet')).toBeOnTheScreen()
        expect(screen.getByRole('tab', { name: 'Repositories' })).toBeSelected()
    })
})
