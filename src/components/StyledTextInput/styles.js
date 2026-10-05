const createStyles = theme => ({
    textInput: {
        minHeight: theme.sizes.minTarget,
        borderRadius: theme.radii.md,
        borderWidth: 1,
        borderColor: theme.colors.inputBorder,
        backgroundColor: theme.colors.surface,
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        paddingHorizontal: theme.spacing.lg,
        paddingVertical: theme.spacing.sm
    },
    error: {
        borderColor: theme.colors.error,
        borderWidth: 2
    }
})

export default createStyles
