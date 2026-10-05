const createStyles = theme => ({
    tab: {
        minHeight: theme.sizes.minTarget,
        minWidth: theme.sizes.minTarget,
        justifyContent: 'center',
        paddingHorizontal: theme.spacing.md,
        borderRadius: theme.radii.sm
    },
    pressed: {
        backgroundColor: theme.colors.appBarPressed
    },
    text: {
        color: theme.colors.appBarTextMuted
    },
    active: {
        color: theme.colors.appBarText,
        textDecorationLine: 'underline'
    }
})

export default createStyles
