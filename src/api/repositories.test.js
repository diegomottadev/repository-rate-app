import { getRepositories } from './repositories'
import mockRepositories from './mocks/repositories'

const okResponse = body => ({ ok: true, status: 200, json: () => Promise.resolve(body) })

describe('getRepositories', () => {
    it('returns the mock data when there is no API URL', async () => {
        const fetchImpl = jest.fn()
        await expect(getRepositories({ baseUrl: null, fetchImpl })).resolves.toBe(mockRepositories)
        expect(fetchImpl).not.toHaveBeenCalled()
    })

    it('calls the API with the abort signal and flattens the edges', async () => {
        const fetchImpl = jest
            .fn()
            .mockResolvedValue(okResponse({ edges: [{ node: { id: 'rails.rails' } }] }))
        const { signal } = new AbortController()

        const result = await getRepositories({ baseUrl: 'http://api.test', fetchImpl, signal })

        expect(fetchImpl).toHaveBeenCalledWith('http://api.test/api/repositories', { signal })
        expect(result).toEqual([{ id: 'rails.rails' }])
    })

    it('throws when the response is not ok', async () => {
        const fetchImpl = jest.fn().mockResolvedValue({ ok: false, status: 500 })
        await expect(getRepositories({ baseUrl: 'http://api.test', fetchImpl })).rejects.toThrow(
            'Request failed with status 500'
        )
    })

    it('lets network errors through', async () => {
        const fetchImpl = jest.fn().mockRejectedValue(new TypeError('Network request failed'))
        await expect(getRepositories({ baseUrl: 'http://api.test', fetchImpl })).rejects.toThrow(
            'Network request failed'
        )
    })
})
