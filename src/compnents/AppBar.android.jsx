import React from 'react'
import { ScrollView, StyleSheet, View,Text} from 'react-native'
import StyledText from './StyleText'
import Constants from 'expo-constants'
import theme from '../theme.js'
import { Link, useLocation } from 'react-router-native'


const AppBarTab = ({children,to}) =>{


    const {pathname} = useLocation()
    const active = pathname === to

    const textStyles = [
        styles.text,
        active && styles.active
    ]

    return <Link to={to}>
                    <StyledText fontWeight='bold' style={textStyles}>
                    {children}
                 </StyledText>  
                </Link>
}

const AppBar = () => {



  return (
        <View style={styles.container}>
             <Text>View de Android</Text>

        </View>
  )
}

const styles = StyleSheet.create({

    container:{
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 15,
        paddingBottom: 5,
        flexDirection: 'row'
    },
    text:{
        color: theme.appBar.textSecondary,
        paddingHorizontal: 10
    },
    active:{
        color: theme.appBar.textPrimary
    },
    scroll: {
        paddingBottom: 15
    }

})

export default AppBar
