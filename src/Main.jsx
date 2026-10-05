import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Navigate, Route, Routes, useLocation } from 'react-router'
import AppBar from './components/AppBar'
import Repositories from './pages/Repositories'
import LogIn from './pages/LogIn'
import { NAV_TABS } from './constants/navigation'
import { useTheme } from './theme'

const styles = StyleSheet.create({
    container: { flexGrow: 1, flex: 1 },
    content: { flex: 1 }
})

const Main = () => {
    const { pathname } = useLocation()
    const theme = useTheme()

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <AppBar tabs={NAV_TABS} activePath={pathname} />
            <View style={styles.content} role='main'>
                <Routes>
                    <Route path='/' element={<Repositories />} />
                    <Route path='/signin' element={<LogIn />} />
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
            </View>
        </View>
    )
}

export default Main
