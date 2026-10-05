import { formatCount } from './formatCount'

describe('formatCount', () => {
    it.each([
        [0, '0'],
        [999, '999'],
        [1000, '1k'],
        [1589, '1.6k'],
        [21553, '21.6k'],
        [999949, '999.9k'],
        [999950, '1M'],
        [1250000, '1.3M']
    ])('formats %p as %p', (value, expected) => {
        expect(formatCount(value)).toBe(expected)
    })

    it.each([undefined, null, NaN, '1000'])('returns "-" for %p', value => {
        expect(formatCount(value)).toBe('-')
    })
})
