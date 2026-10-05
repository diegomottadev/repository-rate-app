import React, { createContext, useContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, useColorScheme, useWindowDimensions } from 'react-native'
import createTheme from './createTheme'
import useReducedMotion from '../hooks/useReducedMotion'

const ThemeContext = createContext(createTheme())

// Reads system settings (color scheme, window width, reduced motion) and
// turns them into one theme object. App data lives in pages/Repositories.
export const ThemeProvider = ({ children }) => {
    const scheme = useColorScheme()
    const { width } = useWindowDimensions()
    const reduceMotion = useReducedMotion()
    const theme = useMemo(
        () => createTheme({ scheme, width, reduceMotion }),
        [scheme, width, reduceMotion]
    )
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

ThemeProvider.propTypes = {
    children: PropTypes.node
}

export const useTheme = () => useContext(ThemeContext)

// createStyles must be defined at module level, otherwise the memo is useless.
export const useThemedStyles = createStyles => {
    const theme = useTheme()
    return useMemo(() => StyleSheet.create(createStyles(theme)), [theme, createStyles])
}
