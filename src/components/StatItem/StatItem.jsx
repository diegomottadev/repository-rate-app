import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import StyledText from '../StyledText'

// Grouped so screen readers read it as one item: "Stars: 21.6k".
const StatItem = ({ label, value }) => (
    <View accessible aria-label={`${label}: ${value}`}>
        <StyledText align='center' fontWeight='bold'>
            {value}
        </StyledText>
        <StyledText align='center' color='secondary' fontSize='small'>
            {label}
        </StyledText>
    </View>
)

StatItem.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

export default StatItem
