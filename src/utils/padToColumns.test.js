import { padToColumns } from './padToColumns'

const items = count => Array.from({ length: count }, (_, i) => ({ id: String(i) }))

describe('padToColumns', () => {
    it('fills the last row with fillers', () => {
        const result = padToColumns(items(4), 3)
        expect(result).toHaveLength(6)
        expect(result.slice(4).every(item => item.isFiller)).toBe(true)
    })

    it('adds nothing when the rows are complete', () => {
        expect(padToColumns(items(6), 3)).toHaveLength(6)
        expect(padToColumns(items(5), 1)).toHaveLength(5)
    })

    it('does not change the original array', () => {
        const original = items(1)
        padToColumns(original, 2)
        expect(original).toHaveLength(1)
    })
})
