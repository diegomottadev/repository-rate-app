import PropTypes from 'prop-types'

export const repositoryShape = PropTypes.shape({
    id: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    description: PropTypes.string,
    language: PropTypes.string,
    forksCount: PropTypes.number,
    stargazersCount: PropTypes.number,
    ratingAverage: PropTypes.number,
    reviewCount: PropTypes.number,
    ownerAvatarUrl: PropTypes.string
})
