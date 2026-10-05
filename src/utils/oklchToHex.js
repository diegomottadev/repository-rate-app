const toSrgbChannel = linear => {
    const value = linear <= 0.0031308 ? 12.92 * linear : 1.055 * Math.pow(linear, 1 / 2.4) - 0.055
    return Math.round(Math.min(1, Math.max(0, value)) * 255)
}

/**
 * Converts an OKLCH color to sRGB hex. React Native doesn't understand oklch()
 * strings, so the tokens are written in OKLCH and converted once.
 * Colors outside the sRGB gamut are clipped.
 * @param {number} lightness 0 to 1
 * @param {number} chroma usually 0 to 0.37
 * @param {number} hue degrees, 0 to 360
 * @returns {string} "#rrggbb"
 */
export const oklchToHex = (lightness, chroma, hue) => {
    const hueRad = (hue * Math.PI) / 180
    const a = chroma * Math.cos(hueRad)
    const b = chroma * Math.sin(hueRad)

    const l = Math.pow(lightness + 0.3963377774 * a + 0.2158037573 * b, 3)
    const m = Math.pow(lightness - 0.1055613458 * a - 0.0638541728 * b, 3)
    const s = Math.pow(lightness - 0.0894841775 * a - 1.291485548 * b, 3)

    const rgb = [
        4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
        -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
        -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s
    ]
    return `#${rgb
        .map(toSrgbChannel)
        .map(n => n.toString(16).padStart(2, '0'))
        .join('')}`
}
