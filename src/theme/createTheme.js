import { oklchToHex } from '../utils/oklchToHex'
import { fluidSize } from '../utils/fluidSize'
import {
    breakpoints,
    fonts,
    fontWeights,
    palettes,
    radii,
    sizes,
    spacing,
    typeScale
} from './tokens'

const mapValues = (object, fn) =>
    Object.fromEntries(Object.entries(object).map(([key, value]) => [key, fn(value)]))

const colorsByScheme = mapValues(palettes, palette =>
    mapValues(palette, ([l, c, h]) => oklchToHex(l, c, h))
)

export const getColumns = width => breakpoints.find(({ minWidth }) => width >= minWidth).columns

const createTheme = ({ scheme = 'light', width = 375, reduceMotion = false } = {}) => ({
    scheme: scheme === 'dark' ? 'dark' : 'light',
    colors: colorsByScheme[scheme === 'dark' ? 'dark' : 'light'],
    fontSizes: mapValues(typeScale, ([min, max]) => fluidSize(min, max, width)),
    fonts,
    fontWeights,
    spacing,
    radii,
    sizes,
    layout: { columns: getColumns(width) },
    motion: { reduce: reduceMotion }
})

export default createTheme
