const FORM_MAX_WIDTH = 420

const createStyles = theme => ({
    form: {
        width: '100%',
        maxWidth: FORM_MAX_WIDTH,
        alignSelf: 'center',
        padding: theme.spacing.lg
    },
    title: {
        marginBottom: theme.spacing.lg
    }
})

export default createStyles
