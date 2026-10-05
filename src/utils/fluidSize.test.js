import { fluidSize } from './fluidSize'

describe('fluidSize', () => {
    it('uses the minimum size on narrow screens', () => {
        expect(fluidSize(14, 16, 280)).toBe(14)
    })

    it('uses the maximum size on wide screens', () => {
        expect(fluidSize(14, 16, 1440)).toBe(16)
    })

    it('grows linearly in between', () => {
        expect(fluidSize(14, 16, 672)).toBe(15)
    })
})
