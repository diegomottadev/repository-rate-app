import { oklchToHex } from './oklchToHex'

describe('oklchToHex', () => {
    it('converts the extremes of lightness', () => {
        expect(oklchToHex(1, 0, 0)).toBe('#ffffff')
        expect(oklchToHex(0, 0, 0)).toBe('#000000')
    })

    it('gives a neutral gray when chroma is 0', () => {
        const hex = oklchToHex(0.6, 0, 250)
        expect(hex.slice(1, 3)).toBe(hex.slice(3, 5))
        expect(hex.slice(3, 5)).toBe(hex.slice(5, 7))
    })

    it('clips out-of-gamut colors to a valid hex value', () => {
        expect(oklchToHex(0.7, 0.4, 145)).toMatch(/^#[0-9a-f]{6}$/)
    })
})
