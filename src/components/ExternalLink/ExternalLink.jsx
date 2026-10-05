import React from 'react'
import PropTypes from 'prop-types'
import { Linking, Platform } from 'react-native'
import StyledText from '../StyledText'
import { useThemedStyles } from '../../theme'
import createStyles from './styles'

// On the web this renders a real <a target="_blank" rel="noopener noreferrer">.
// Native apps have no tabs, so the link opens in the system browser.
const ExternalLink = ({ href, children, label }) => {
    const styles = useThemedStyles(createStyles)
    const platformProps =
        Platform.OS === 'web'
            ? { href, hrefAttrs: { target: '_blank', rel: 'noopener noreferrer' } }
            : { onPress: () => Linking.openURL(href) }

    return (
        <StyledText role='link' aria-label={label} style={styles.link} {...platformProps}>
            {children}
        </StyledText>
    )
}

ExternalLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    label: PropTypes.string
}

export default ExternalLink
