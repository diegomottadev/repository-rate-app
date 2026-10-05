import createTheme, { getColumns } from './createTheme'

describe('getColumns', () => {
    it.each([
        [375, 1],
        [699, 1],
        [700, 2],
        [1023, 2],
        [1024, 3]
    ])('uses %p px -> %p columns', (width, columns) => {
        expect(getColumns(width)).toBe(columns)
    })
})

describe('createTheme', () => {
    it('uses different colors for light and dark', () => {
        const light = createTheme({ scheme: 'light' })
        const dark = createTheme({ scheme: 'dark' })
        expect(light.colors.background).not.toBe(dark.colors.background)
    })

    it('falls back to light for an unknown scheme', () => {
        expect(createTheme({ scheme: null }).scheme).toBe('light')
    })
})
