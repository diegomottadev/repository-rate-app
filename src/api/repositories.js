import { API_URL, REPOSITORIES_PATH } from '../constants/api'
import { flattenEdges } from '../utils/flattenEdges'
import mockRepositories from './mocks/repositories'

/**
 * Loads the repositories from the API, or the local mock data when no API URL
 * is set.
 * @param {object} [options]
 * @param {AbortSignal} [options.signal] cancels the request (used on unmount)
 * @param {string|null} [options.baseUrl] API origin, defaults to API_URL
 * @param {typeof fetch} [options.fetchImpl] fetch function, so tests can pass a mock
 * @returns {Promise<object[]>} repositories as flat objects
 * @throws {Error} when the response status isn't 2xx, or on network errors
 */
export const getRepositories = async ({ signal, baseUrl = API_URL, fetchImpl = fetch } = {}) => {
    if (!baseUrl) return mockRepositories

    const response = await fetchImpl(`${baseUrl}${REPOSITORIES_PATH}`, { signal })
    if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
    }
    return flattenEdges(await response.json())
}
