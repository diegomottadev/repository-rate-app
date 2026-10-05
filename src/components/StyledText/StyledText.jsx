import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import { useThemedStyles } from '../../theme'
import createStyles, { variants } from './styles'

const StyledText = ({ children, color, fontSize, fontWeight, align, style, ...restOfProps }) => {
    const styles = useThemedStyles(createStyles)
    const selected = { color, fontSize, fontWeight, align }
    const variantStyles = Object.entries(selected).map(
        ([prop, value]) => styles[variants[prop][value]]
    )
    return (
        <Text style={[styles.text, ...variantStyles, style]} {...restOfProps}>
            {children}
        </Text>
    )
}

StyledText.propTypes = {
    children: PropTypes.node,
    color: PropTypes.oneOf(Object.keys(variants.color)),
    fontSize: PropTypes.oneOf(Object.keys(variants.fontSize)),
    fontWeight: PropTypes.oneOf(Object.keys(variants.fontWeight)),
    align: PropTypes.oneOf(Object.keys(variants.align)),
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

export default StyledText
