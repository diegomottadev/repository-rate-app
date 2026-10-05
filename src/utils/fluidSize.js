/**
 * Same idea as CSS clamp(min, preferred, max): the size grows linearly with
 * the screen width between minWidth and maxWidth, and stays fixed outside.
 * @param {number} min size at minWidth or less
 * @param {number} max size at maxWidth or more
 * @param {number} width current window width
 * @param {number} [minWidth=320]
 * @param {number} [maxWidth=1024]
 * @returns {number} rounded to 1 decimal
 */
export const fluidSize = (min, max, width, minWidth = 320, maxWidth = 1024) => {
    if (width <= minWidth) return min
    if (width >= maxWidth) return max
    const progress = (width - minWidth) / (maxWidth - minWidth)
    return Math.round((min + (max - min) * progress) * 10) / 10
}
