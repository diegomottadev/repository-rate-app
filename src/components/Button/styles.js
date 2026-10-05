const createStyles = theme => ({
    button: {
        minHeight: theme.sizes.minTarget,
        minWidth: theme.sizes.minTarget,
        paddingHorizontal: theme.spacing.xl,
        borderRadius: theme.radii.md,
        backgroundColor: theme.colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    pressed: {
        opacity: 0.8
    },
    label: {
        color: theme.colors.onPrimary
    }
})

export default createStyles
