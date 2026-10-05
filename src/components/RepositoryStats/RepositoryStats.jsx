import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import StatItem from '../StatItem'
import { REPOSITORY_STATS } from '../../constants/repositoryStats'
import { repositoryShape } from '../../types/repository'
import { useThemedStyles } from '../../theme'
import createStyles from './styles'

const RepositoryStats = ({ repository, stats = REPOSITORY_STATS }) => {
    const styles = useThemedStyles(createStyles)
    return (
        <View style={styles.container}>
            {stats.map(({ key, label, format }) => (
                <StatItem key={key} label={label} value={format(repository[key])} />
            ))}
        </View>
    )
}

RepositoryStats.propTypes = {
    repository: repositoryShape.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            format: PropTypes.func.isRequired
        })
    )
}

export default RepositoryStats
