const roundToOneDecimal = value => Math.round(value * 10) / 10

/**
 * Short count for the stats row: 999 -> "999", 1589 -> "1.6k", 1250000 -> "1.3M".
 * @param {number} value
 * @returns {string} "-" when the value isn't a number
 */
export const formatCount = value => {
    if (typeof value !== 'number' || Number.isNaN(value)) return '-'
    if (value < 1000) return String(value)

    const thousands = roundToOneDecimal(value / 1000)
    // 999950 rounds to 1000k, so it has to move up to millions.
    if (thousands < 1000) return `${thousands}k`
    return `${roundToOneDecimal(value / 1000000)}M`
}
