const createStyles = theme => ({
    badge: {
        paddingHorizontal: theme.spacing.sm,
        paddingVertical: theme.spacing.xs,
        color: theme.colors.onPrimary,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        borderRadius: theme.radii.sm,
        overflow: 'hidden',
        marginTop: theme.spacing.sm
    }
})

export default createStyles
