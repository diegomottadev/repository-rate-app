import { useEffect, useState } from 'react'
import { AccessibilityInfo } from 'react-native'

const useReducedMotion = () => {
    const [reduceMotion, setReduceMotion] = useState(false)

    useEffect(() => {
        let active = true
        AccessibilityInfo.isReduceMotionEnabled().then(value => {
            if (active) setReduceMotion(value)
        })
        const subscription = AccessibilityInfo.addEventListener(
            'reduceMotionChanged',
            setReduceMotion
        )
        return () => {
            active = false
            subscription?.remove()
        }
    }, [])

    return reduceMotion
}

export default useReducedMotion
