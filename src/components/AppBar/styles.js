import Constants from 'expo-constants'

const createStyles = theme => ({
    container: {
        backgroundColor: theme.colors.appBar,
        paddingTop: Constants.statusBarHeight + theme.spacing.sm,
        paddingBottom: theme.spacing.xs,
        paddingHorizontal: theme.spacing.sm,
        flexDirection: 'row'
    }
})

export default createStyles
