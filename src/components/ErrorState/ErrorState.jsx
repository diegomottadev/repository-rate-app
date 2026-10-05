import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { AccessibilityInfo, View } from 'react-native'
import StyledText from '../StyledText'
import Button from '../Button'
import { useThemedStyles } from '../../theme'
import createStyles from './styles'

const ErrorState = ({ title, detail, onRetry }) => {
    const styles = useThemedStyles(createStyles)

    // aria-live only works on Android and the web. iOS needs an announcement.
    useEffect(() => {
        AccessibilityInfo.announceForAccessibility?.(title)
    }, [title])

    return (
        <View style={styles.container} role='alert' aria-live='assertive'>
            <StyledText color='error' fontSize='subheading' fontWeight='bold' align='center'>
                {title}
            </StyledText>
            {detail ? (
                <StyledText color='secondary' align='center' style={styles.detail}>
                    {detail}
                </StyledText>
            ) : null}
            <Button title='Try again' onPress={onRetry} />
        </View>
    )
}

ErrorState.propTypes = {
    title: PropTypes.string.isRequired,
    detail: PropTypes.string,
    onRetry: PropTypes.func.isRequired
}

export default ErrorState
