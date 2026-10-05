import { useCallback, useEffect, useState } from 'react'
import { getRepositories } from '../api/repositories'

const useRepositories = () => {
    const [state, setState] = useState({ repositories: [], loading: true, error: null })
    const [attempt, setAttempt] = useState(0)

    useEffect(() => {
        const controller = new AbortController()

        getRepositories({ signal: controller.signal })
            .then(repositories => {
                if (controller.signal.aborted) return
                setState({ repositories, loading: false, error: null })
            })
            .catch(error => {
                if (controller.signal.aborted) return
                setState(prev => ({ ...prev, loading: false, error }))
            })

        return () => controller.abort()
    }, [attempt])

    // The first load starts with loading: true, so only a retry needs to set it.
    const refetch = useCallback(() => {
        setState(prev => ({ ...prev, loading: true, error: null }))
        setAttempt(n => n + 1)
    }, [])

    return { ...state, refetch }
}

export default useRepositories
