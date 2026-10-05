/**
 * Adds empty filler items so the last row is complete. FlatList stretches
 * the cards of an incomplete row, and the fillers keep every card the same width.
 * @param {object[]} items
 * @param {number} columns
 * @returns {object[]} a new array; fillers have isFiller: true
 */
export const padToColumns = (items, columns) => {
    const missing = (columns - (items.length % columns)) % columns
    const fillers = Array.from({ length: missing }, (_, index) => ({
        id: `filler-${index}`,
        isFiller: true
    }))
    return [...items, ...fillers]
}
