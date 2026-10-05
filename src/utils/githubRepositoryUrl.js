/**
 * Builds the GitHub URL from "owner/repo". Each part is encoded on its own,
 * so the slash between them stays a path separator.
 * @param {string} fullName
 * @returns {string|null} null when the name isn't "owner/repo"
 */
export const githubRepositoryUrl = fullName => {
    const [owner, repo] = String(fullName).split('/')
    if (!owner || !repo) return null
    return `https://github.com/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}`
}
