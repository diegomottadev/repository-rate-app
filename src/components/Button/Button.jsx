import React from 'react'
import PropTypes from 'prop-types'
import { Pressable } from 'react-native'
import StyledText from '../StyledText'
import { useThemedStyles } from '../../theme'
import createStyles from './styles'

const Button = ({ title, onPress, style, ...props }) => {
    const styles = useThemedStyles(createStyles)
    return (
        <Pressable
            role='button'
            onPress={onPress}
            style={({ pressed }) => [styles.button, pressed && styles.pressed, style]}
            {...props}
        >
            <StyledText fontWeight='bold' style={styles.label}>
                {title}
            </StyledText>
        </Pressable>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

export default Button
