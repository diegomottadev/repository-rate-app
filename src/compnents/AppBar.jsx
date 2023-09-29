import React from 'react'
import { ScrollView, StyleSheet, View} from 'react-native'
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
             <ScrollView horizontal style={styles.scroll}>
                <AppBarTab to='/'>Repositories</AppBarTab>
                <AppBarTab to='/signin'>Sign In</AppBarTab>
             </ScrollView>

        </View>
  )
}

const styles = StyleSheet.create({

    container:{
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
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
