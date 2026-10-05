import React from 'react'
import PropTypes from 'prop-types'
import { TextInput } from 'react-native'
import { useTheme, useThemedStyles } from '../../theme'
import createStyles from './styles'

const StyledTextInput = ({ style, error = false, ...props }) => {
    const theme = useTheme()
    const styles = useThemedStyles(createStyles)
    return (
        <TextInput
            style={[styles.textInput, error && styles.error, style]}
            placeholderTextColor={theme.colors.textSecondary}
            {...props}
        />
    )
}

StyledTextInput.propTypes = {
    error: PropTypes.bool,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

export default StyledTextInput
