import React from 'react'
import { View } from 'react-native'
import RepositoryItemHeader from '../RepositoryItemHeader'
import RepositoryStats from '../RepositoryStats'
import ExternalLink from '../ExternalLink'
import { repositoryShape } from '../../types/repository'
import { useThemedStyles } from '../../theme'
import { githubRepositoryUrl } from '../../utils/githubRepositoryUrl'
import createStyles from './styles'

const RepositoryItem = ({ repository }) => {
    const styles = useThemedStyles(createStyles)
    const { ownerAvatarUrl, fullName, description, language } = repository
    const url = githubRepositoryUrl(fullName)

    return (
        <View style={styles.card}>
            <RepositoryItemHeader
                ownerAvatarUrl={ownerAvatarUrl}
                fullName={fullName}
                description={description}
                language={language}
            />
            <RepositoryStats repository={repository} />
            {url ? (
                <ExternalLink href={url} label={`Open ${fullName} on GitHub (new tab)`}>
                    Open on GitHub
                </ExternalLink>
            ) : null}
        </View>
    )
}

RepositoryItem.propTypes = {
    repository: repositoryShape.isRequired
}

export default RepositoryItem
