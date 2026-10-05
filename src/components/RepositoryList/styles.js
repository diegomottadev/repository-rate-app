const createStyles = theme => ({
    content: {
        width: '100%',
        maxWidth: theme.sizes.contentMaxWidth,
        alignSelf: 'center',
        padding: theme.spacing.lg
    },
    row: {
        gap: theme.spacing.lg
    },
    // No padding or border here: with flexBasis 0 they would still count
    // as minimum width and make cells with content wider than fillers.
    cell: {
        flex: 1,
        flexBasis: 0
    },
    separator: {
        height: theme.spacing.lg
    }
})

export default createStyles
