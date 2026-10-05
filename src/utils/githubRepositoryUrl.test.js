import { githubRepositoryUrl } from './githubRepositoryUrl'

describe('githubRepositoryUrl', () => {
    it('builds the repository URL', () => {
        expect(githubRepositoryUrl('rails/rails')).toBe('https://github.com/rails/rails')
    })

    it('encodes each part of the name', () => {
        expect(githubRepositoryUrl('my org/repo#1?x')).toBe(
            'https://github.com/my%20org/repo%231%3Fx'
        )
    })

    it.each(['rails', '', '/rails', 'rails/', undefined])('returns null for %p', fullName => {
        expect(githubRepositoryUrl(fullName)).toBeNull()
    })
})
