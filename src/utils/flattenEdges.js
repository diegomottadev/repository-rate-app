/**
 * Turns the API shape { edges: [{ node }] } into a plain array of nodes.
 * @param {{ edges?: { node: object }[] } | null | undefined} connection
 * @returns {object[]} [] when there are no edges
 */
export const flattenEdges = connection => connection?.edges?.map(edge => edge.node) ?? []
