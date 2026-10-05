import React from 'react'
import PropTypes from 'prop-types'
import { FlatList, View } from 'react-native'
import RepositoryItem from '../RepositoryItem'
import RepositoryItemSkeleton from '../RepositoryItemSkeleton'
import EmptyState from '../EmptyState'
import { repositoryShape } from '../../types/repository'
import { useTheme, useThemedStyles } from '../../theme'
import { padToColumns } from '../../utils/padToColumns'
import createStyles from './styles'

const SKELETON_COUNT = 4
const skeletonItems = Array.from({ length: SKELETON_COUNT }, (_, index) => ({
    id: `skeleton-${index}`
}))

const Separator = () => {
    const styles = useThemedStyles(createStyles)
    return <View style={styles.separator} />
}

const RepositoryList = ({ repositories, loading = false, onRefresh }) => {
    const theme = useTheme()
    const styles = useThemedStyles(createStyles)
    const { columns } = theme.layout
    const showSkeletons = loading && repositories.length === 0
    const items = showSkeletons ? skeletonItems : repositories
    // With no items, ListEmptyComponent has to show, so don't add fillers.
    const data = items.length > 0 ? padToColumns(items, columns) : items

    const renderCell = item => {
        if (item.isFiller) return null
        if (showSkeletons) return <RepositoryItemSkeleton />
        return <RepositoryItem repository={item} />
    }
    // In a single column the list runs vertically, and flexBasis 0 would
    // collapse the height, so the cell style is only for the grid.
    const renderItem = ({ item }) => (
        <View style={columns > 1 ? styles.cell : undefined}>{renderCell(item)}</View>
    )

    return (
        <FlatList
            // FlatList can't change numColumns on the fly, so it remounts on change.
            key={`columns-${columns}`}
            numColumns={columns}
            columnWrapperStyle={columns > 1 ? styles.row : undefined}
            contentContainerStyle={styles.content}
            data={data}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={Separator}
            renderItem={renderItem}
            ListEmptyComponent={
                <EmptyState title='No repositories yet' hint='Pull down to refresh.' />
            }
            refreshing={loading && !showSkeletons}
            onRefresh={onRefresh}
            aria-busy={loading}
            aria-label={showSkeletons ? 'Loading repositories' : undefined}
        />
    )
}

RepositoryList.propTypes = {
    repositories: PropTypes.arrayOf(repositoryShape).isRequired,
    loading: PropTypes.bool,
    onRefresh: PropTypes.func
}

export default RepositoryList
