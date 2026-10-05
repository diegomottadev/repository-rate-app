import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import StyledText from '../StyledText'
import { useThemedStyles } from '../../theme'
import createStyles from './styles'

const EmptyState = ({ title, hint }) => {
    const styles = useThemedStyles(createStyles)
    return (
        <View style={styles.container} aria-live='polite'>
            <StyledText fontSize='subheading' fontWeight='bold' align='center'>
                {title}
            </StyledText>
            {hint ? (
                <StyledText color='secondary' align='center' style={styles.hint}>
                    {hint}
                </StyledText>
            ) : null}
        </View>
    )
}

EmptyState.propTypes = {
    title: PropTypes.string.isRequired,
    hint: PropTypes.string
}

export default EmptyState
