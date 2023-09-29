import React from 'react'
import {View, StyleSheet} from 'react-native'
import RepositoryStats from './RepositoryStats.jsx'
import theme from '../theme.js'
import  RepositoryItemHeader  from './RepositoryItemHeader.jsx'



const RepositoryItem = (props) => (
            <View key={props.id} style={styles.container}>
                 <RepositoryItemHeader {...props} />   
                 <RepositoryStats {...props} />
            </View>
)

const styles = StyleSheet.create({
    container:{
        padding:20,
        paddingBottom: 5,
        paddingTop: 5
    },
    languaje: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor:theme.colors.primary,
        alignSelf: 'flex-start',
        borderRadius: 4,
        overflow: 'hidden'

    },
    image:{
        width: 48,
        height: 48,
        borderRadius: 4
    }
})

export default RepositoryItem