import React, { useEffect, useState } from 'react'
import { Animated, Platform, View } from 'react-native'
import { useTheme, useThemedStyles } from '../../theme'
import createStyles from './styles'

const PULSE_MS = 800

const RepositoryItemSkeleton = () => {
    const theme = useTheme()
    const styles = useThemedStyles(createStyles)
    const [opacity] = useState(() => new Animated.Value(1))

    useEffect(() => {
        if (theme.motion.reduce) {
            opacity.setValue(1)
            return undefined
        }
        const useNativeDriver = Platform.OS !== 'web'
        const pulse = Animated.loop(
            Animated.sequence([
                Animated.timing(opacity, { toValue: 0.5, duration: PULSE_MS, useNativeDriver }),
                Animated.timing(opacity, { toValue: 1, duration: PULSE_MS, useNativeDriver })
            ])
        )
        pulse.start()
        return () => pulse.stop()
    }, [opacity, theme.motion.reduce])

    return (
        <Animated.View style={[styles.card, { opacity }]} aria-hidden>
            <View style={styles.row}>
                <View style={styles.avatar} />
                <View style={styles.lines}>
                    <View style={[styles.line, styles.lineTitle]} />
                    <View style={[styles.line, styles.lineText]} />
                    <View style={[styles.line, styles.lineBadge]} />
                </View>
            </View>
            <View style={styles.stats} />
        </Animated.View>
    )
}

export default RepositoryItemSkeleton
