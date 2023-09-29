
import React from 'react'
import {View} from 'react-native'
import StyledText from './StyleText.jsx'

const parseThorusands = value => {
    return value >= 1000 ? `${Math.round(value/100 ) /10 }k` : String(value)
}

const RepositoryStats = props => {
    return(
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View>
                <StyledText align='center' fontWeight='bold'>Start</StyledText>
                <StyledText align='center'>{parseThorusands(props.stargazersCount)}</StyledText>
            </View>
            <View>
                <StyledText align='center' fontWeight='bold'>Forks</StyledText>
                <StyledText align='center'>{parseThorusands(props.forksCount)}</StyledText>
            </View>    
            <View>
                <StyledText align='center'  fontWeight='bold'>Review</StyledText>
                <StyledText align='center'>{props.reviewCount}</StyledText>
            </View>
            <View>
                <StyledText align='center' fontWeight='bold'>Rating</StyledText>
                <StyledText align='center'>{props.ratingAverage}</StyledText>
            </View>    
        </View>
    )
}

export default RepositoryStats