import React from 'react'
import PropTypes from 'prop-types'
import { Image, View } from 'react-native'
import StyledText from '../StyledText'
import LanguageBadge from '../LanguageBadge'
import { useThemedStyles } from '../../theme'
import createStyles from './styles'

const RepositoryItemHeader = ({ ownerAvatarUrl, fullName, description, language }) => {
    const styles = useThemedStyles(createStyles)
    return (
        <View style={styles.container}>
            {/* The name is right next to it, so the avatar is decorative. */}
            <Image
                style={styles.avatar}
                source={{ uri: ownerAvatarUrl }}
                accessible={false}
                accessibilityIgnoresInvertColors
            />
            <View style={styles.info}>
                <StyledText fontWeight='bold' fontSize='subheading' role='heading'>
                    {fullName}
                </StyledText>
                {description ? (
                    <StyledText color='secondary' style={styles.description}>
                        {description}
                    </StyledText>
                ) : null}
                {language ? <LanguageBadge language={language} /> : null}
            </View>
        </View>
    )
}

RepositoryItemHeader.propTypes = {
    ownerAvatarUrl: PropTypes.string,
    fullName: PropTypes.string.isRequired,
    description: PropTypes.string,
    language: PropTypes.string
}

export default RepositoryItemHeader
