import React from 'react'
import { View,StyleSheet, Image } from 'react-native'
import StyledText from './StyleText.jsx'
import theme from '../theme.js'

const RepositoryItemHeader = ({ownerAvatarUrl,fullName,description,language}) => {
  return (
    <View style={{ flexDirection:'row',paddingBottom:2}}>
        <View style={{paddingRight:10}}>
            <Image style={styles.image} source={{uri: ownerAvatarUrl}}/>
        </View>
        <View style={{ flex:1}}>
            <StyledText fontWeight='bold'>Fullname: {fullName}</StyledText>
            <StyledText color='secondary'>{description}</StyledText>
            <StyledText style={styles.languaje}>{language}</StyledText>
        </View>
     </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        paddingVertical: 5,
    },
    languaje: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor:theme.colors.primary,
        alignSelf: 'flex-start',
        borderRadius: 4,
        overflow: 'hidden',
        marginVertical:4,


    },
    image:{
        width: 48,
        height: 48,
        borderRadius: 4
    }
})


export default RepositoryItemHeader