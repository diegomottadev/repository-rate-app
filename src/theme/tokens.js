import { Platform } from 'react-native'

// [lightness 0-1, chroma, hue]
export const palettes = {
    light: {
        background: [0.975, 0.004, 250],
        surface: [1, 0, 0],
        textPrimary: [0.27, 0.012, 250],
        textSecondary: [0.47, 0.016, 250],
        border: [0.87, 0.008, 250],
        inputBorder: [0.6, 0.012, 250],
        primary: [0.52, 0.17, 255],
        onPrimary: [0.99, 0, 0],
        error: [0.53, 0.19, 25],
        focus: [0.6, 0.18, 255],
        skeleton: [0.92, 0.006, 250],
        appBar: [0.27, 0.012, 250],
        appBarPressed: [0.36, 0.014, 250],
        appBarText: [0.99, 0, 0],
        appBarTextMuted: [0.78, 0.01, 250]
    },
    dark: {
        background: [0.17, 0.01, 250],
        surface: [0.22, 0.012, 250],
        textPrimary: [0.93, 0.005, 250],
        textSecondary: [0.74, 0.012, 250],
        border: [0.36, 0.012, 250],
        inputBorder: [0.58, 0.012, 250],
        primary: [0.74, 0.13, 255],
        onPrimary: [0.17, 0.01, 250],
        error: [0.74, 0.15, 25],
        focus: [0.76, 0.13, 255],
        skeleton: [0.3, 0.01, 250],
        appBar: [0.13, 0.01, 250],
        appBarPressed: [0.24, 0.012, 250],
        appBarText: [0.97, 0, 0],
        appBarTextMuted: [0.74, 0.01, 250]
    }
}

// [size at 320px wide, size at 1024px wide]
export const typeScale = {
    small: [12, 13],
    body: [14, 16],
    subheading: [16, 18],
    title: [18, 22]
}

export const fonts = {
    main: Platform.select({
        ios: 'Arial',
        android: 'Roboto',
        default: 'System'
    })
}

export const fontWeights = {
    normal: '400',
    bold: '700'
}

export const spacing = {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24
}

export const radii = {
    sm: 4,
    md: 8,
    lg: 12,
    pill: 999
}

// 44 is the minimum touch target size (Apple HIG / WCAG 2.5.5).
export const sizes = {
    minTarget: 44,
    avatar: 48,
    contentMaxWidth: 1200
}

export const breakpoints = [
    { minWidth: 1024, columns: 3 },
    { minWidth: 700, columns: 2 },
    { minWidth: 0, columns: 1 }
]
