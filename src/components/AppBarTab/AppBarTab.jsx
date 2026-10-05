import React from 'react'
import PropTypes from 'prop-types'
import { Pressable } from 'react-native'
import { useNavigate } from 'react-router'
import StyledText from '../StyledText'
import { useThemedStyles } from '../../theme'
import createStyles from './styles'

const AppBarTab = ({ to, label, active = false }) => {
    const styles = useThemedStyles(createStyles)
    const navigate = useNavigate()
    return (
        <Pressable
            onPress={() => navigate(to)}
            style={({ pressed }) => [styles.tab, pressed && styles.pressed]}
            role='tab'
            aria-selected={active}
        >
            <StyledText fontWeight='bold' style={[styles.text, active && styles.active]}>
                {label}
            </StyledText>
        </Pressable>
    )
}

AppBarTab.propTypes = {
    to: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    active: PropTypes.bool
}

export default AppBarTab
