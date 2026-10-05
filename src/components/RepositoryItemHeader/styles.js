const createStyles = theme => ({
    container: {
        flexDirection: 'row'
    },
    avatar: {
        width: theme.sizes.avatar,
        height: theme.sizes.avatar,
        borderRadius: theme.radii.sm,
        marginRight: theme.spacing.md,
        backgroundColor: theme.colors.skeleton
    },
    info: {
        flex: 1
    },
    description: {
        marginTop: theme.spacing.xs
    }
})

export default createStyles
