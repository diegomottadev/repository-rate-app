const FORM_MAX_WIDTH = 420

const createStyles = theme => ({
    form: {
        width: '100%',
        maxWidth: FORM_MAX_WIDTH,
        alignSelf: 'center',
        padding: theme.spacing.lg
    },
    title: {
        marginBottom: theme.spacing.md
    },
    infoBox: {
        backgroundColor: theme.colors.surface,
        borderWidth: 1,
        borderColor: theme.colors.border,
        borderRadius: theme.radii.md,
        padding: theme.spacing.md,
        marginBottom: theme.spacing.lg
    },
    infoText: {
        lineHeight: 18
    }
})

export default createStyles
