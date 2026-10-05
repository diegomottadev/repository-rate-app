const createStyles = theme => ({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    colorPrimary: { color: theme.colors.primary },
    colorSecondary: { color: theme.colors.textSecondary },
    colorError: { color: theme.colors.error },
    fontSizeSmall: { fontSize: theme.fontSizes.small },
    fontSizeSubheading: { fontSize: theme.fontSizes.subheading },
    fontSizeTitle: { fontSize: theme.fontSizes.title },
    bold: { fontWeight: theme.fontWeights.bold },
    alignCenter: { textAlign: 'center' }
})

// Prop value -> style key. Adding a variant means adding one line here.
export const variants = {
    color: { primary: 'colorPrimary', secondary: 'colorSecondary', error: 'colorError' },
    fontSize: { small: 'fontSizeSmall', subheading: 'fontSizeSubheading', title: 'fontSizeTitle' },
    fontWeight: { bold: 'bold' },
    align: { center: 'alignCenter' }
}

export default createStyles
