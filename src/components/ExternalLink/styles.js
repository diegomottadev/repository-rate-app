const LINE_HEIGHT = 20

const createStyles = theme => ({
    // A Text can't center its content, so the 44px target is the line
    // height plus the vertical padding.
    link: {
        alignSelf: 'flex-start',
        lineHeight: LINE_HEIGHT,
        paddingVertical: (theme.sizes.minTarget - LINE_HEIGHT) / 2,
        marginTop: theme.spacing.sm,
        marginBottom: -theme.spacing.md,
        color: theme.colors.primary,
        fontWeight: theme.fontWeights.bold,
        textDecorationLine: 'underline'
    }
})

export default createStyles
