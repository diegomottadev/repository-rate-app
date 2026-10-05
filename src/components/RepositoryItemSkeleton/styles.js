const createStyles = theme => ({
    card: {
        flex: 1,
        padding: theme.spacing.lg,
        backgroundColor: theme.colors.surface,
        borderWidth: 1,
        borderColor: theme.colors.border,
        borderRadius: theme.radii.lg
    },
    row: {
        flexDirection: 'row'
    },
    avatar: {
        width: theme.sizes.avatar,
        height: theme.sizes.avatar,
        borderRadius: theme.radii.sm,
        marginRight: theme.spacing.md,
        backgroundColor: theme.colors.skeleton
    },
    lines: {
        flex: 1
    },
    line: {
        height: theme.fontSizes.body,
        borderRadius: theme.radii.sm,
        marginBottom: theme.spacing.sm,
        backgroundColor: theme.colors.skeleton
    },
    lineTitle: { width: '60%' },
    lineText: { width: '90%' },
    lineBadge: { width: 64, height: theme.fontSizes.body + theme.spacing.sm },
    stats: {
        height: theme.fontSizes.body * 2 + theme.spacing.xs,
        marginTop: theme.spacing.lg,
        borderRadius: theme.radii.sm,
        backgroundColor: theme.colors.skeleton
    }
})

export default createStyles
