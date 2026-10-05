import React from 'react'
import RepositoryList from '../../components/RepositoryList'
import ErrorState from '../../components/ErrorState'
import useRepositories from '../../hooks/useRepositories'

// The only component that owns app state. Everything below it gets props.
const Repositories = () => {
    const { repositories, loading, error, refetch } = useRepositories()

    if (error) {
        return (
            <ErrorState
                title='Could not load repositories'
                detail={error.message}
                onRetry={refetch}
            />
        )
    }
    return <RepositoryList repositories={repositories} loading={loading} onRefresh={refetch} />
}

export default Repositories
