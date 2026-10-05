import React from 'react'
import { Linking } from 'react-native'
import { screen, userEvent } from '@testing-library/react-native'
import Repositories from './Repositories'
import { getRepositories } from '../../api/repositories'
import { renderWithProviders } from '../../testUtils/renderWithProviders'

jest.mock('../../api/repositories')

const formik = {
    id: 'jaredpalmer.formik',
    fullName: 'jaredpalmer/formik',
    description: 'Build forms in React, without the tears',
    language: 'TypeScript',
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: 'https://example.test/avatar.png'
}

// A promise we resolve by hand, to look at the loading state.
const deferred = () => {
    let resolve
    const promise = new Promise(res => {
        resolve = res
    })
    return { promise, resolve }
}

describe('Repositories', () => {
    afterEach(() => jest.clearAllMocks())

    it('shows skeletons while loading, then the repositories', async () => {
        const request = deferred()
        getRepositories.mockReturnValue(request.promise)

        await renderWithProviders(<Repositories />)
        expect(screen.getByLabelText('Loading repositories')).toBeBusy()

        request.resolve([formik])

        expect(await screen.findByRole('heading', { name: 'jaredpalmer/formik' })).toBeOnTheScreen()
        expect(screen.getByLabelText('Stars: 21.6k')).toBeOnTheScreen()
        expect(screen.getByLabelText('Forks: 1.6k')).toBeOnTheScreen()
        expect(screen.getByLabelText('Language: TypeScript')).toBeOnTheScreen()
    })

    it('hides the language badge when the repository has no language', async () => {
        getRepositories.mockResolvedValue([{ ...formik, language: null }])

        await renderWithProviders(<Repositories />)

        expect(await screen.findByRole('heading', { name: 'jaredpalmer/formik' })).toBeOnTheScreen()
        expect(screen.queryByLabelText(/^Language:/)).not.toBeOnTheScreen()
    })

    it('shows the empty state when there are no repositories', async () => {
        getRepositories.mockResolvedValue([])

        await renderWithProviders(<Repositories />)

        expect(await screen.findByText('No repositories yet')).toBeOnTheScreen()
    })

    it('shows the error and loads again when the user retries', async () => {
        const user = userEvent.setup()
        getRepositories
            .mockRejectedValueOnce(new Error('Request failed with status 500'))
            .mockResolvedValueOnce([formik])

        await renderWithProviders(<Repositories />)

        expect(await screen.findByText('Could not load repositories')).toBeOnTheScreen()
        expect(screen.getByText('Request failed with status 500')).toBeOnTheScreen()

        await user.press(screen.getByRole('button', { name: 'Try again' }))

        expect(await screen.findByRole('heading', { name: 'jaredpalmer/formik' })).toBeOnTheScreen()
        expect(screen.queryByText('Could not load repositories')).not.toBeOnTheScreen()
        expect(getRepositories).toHaveBeenCalledTimes(2)
    })

    it('aborts the request when the screen unmounts', async () => {
        getRepositories.mockReturnValue(new Promise(() => {}))

        const { unmount } = await renderWithProviders(<Repositories />)
        const { signal } = getRepositories.mock.calls[0][0]
        expect(signal.aborted).toBe(false)

        await unmount()

        expect(signal.aborted).toBe(true)
    })

    it('opens the repository on GitHub', async () => {
        const user = userEvent.setup()
        const openURL = jest.spyOn(Linking, 'openURL').mockResolvedValue(true)
        getRepositories.mockResolvedValue([formik])

        await renderWithProviders(<Repositories />)
        await user.press(
            await screen.findByRole('link', { name: 'Open jaredpalmer/formik on GitHub (new tab)' })
        )

        expect(openURL).toHaveBeenCalledWith('https://github.com/jaredpalmer/formik')
    })
})
