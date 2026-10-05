import { flattenEdges } from './flattenEdges'

describe('flattenEdges', () => {
    it('returns the node of each edge', () => {
        const connection = { edges: [{ node: { id: 'a' } }, { node: { id: 'b' } }] }
        expect(flattenEdges(connection)).toEqual([{ id: 'a' }, { id: 'b' }])
    })

    it.each([null, undefined, {}, { edges: null }])('returns [] for %p', connection => {
        expect(flattenEdges(connection)).toEqual([])
    })
})
