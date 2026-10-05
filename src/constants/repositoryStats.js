import { formatCount } from '../utils/formatCount'

export const REPOSITORY_STATS = [
    { key: 'stargazersCount', label: 'Stars', format: formatCount },
    { key: 'forksCount', label: 'Forks', format: formatCount },
    { key: 'reviewCount', label: 'Reviews', format: formatCount },
    { key: 'ratingAverage', label: 'Rating', format: formatCount }
]
