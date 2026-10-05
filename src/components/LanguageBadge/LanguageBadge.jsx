import React from 'react'
import PropTypes from 'prop-types'
import StyledText from '../StyledText'
import { useThemedStyles } from '../../theme'
import createStyles from './styles'

const LanguageBadge = ({ language }) => {
    const styles = useThemedStyles(createStyles)
    return (
        <StyledText fontSize='small' style={styles.badge} aria-label={`Language: ${language}`}>
            {language}
        </StyledText>
    )
}

LanguageBadge.propTypes = {
    language: PropTypes.string.isRequired
}

export default LanguageBadge
