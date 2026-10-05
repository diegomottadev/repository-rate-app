import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView, View } from 'react-native'
import AppBarTab from '../AppBarTab'
import { useThemedStyles } from '../../theme'
import createStyles from './styles'

const AppBar = ({ tabs, activePath }) => {
    const styles = useThemedStyles(createStyles)
    return (
        <View style={styles.container} role='banner'>
            <ScrollView horizontal role='tablist'>
                {tabs.map(({ to, label }) => (
                    <AppBarTab key={to} to={to} label={label} active={activePath === to} />
                ))}
            </ScrollView>
        </View>
    )
}

AppBar.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            to: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        })
    ).isRequired,
    activePath: PropTypes.string.isRequired
}

export default AppBar
