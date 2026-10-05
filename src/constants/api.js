import Constants from 'expo-constants'

const configuredUrl = Constants.expoConfig?.extra?.apiUrl

// Set API_URL when starting Expo, e.g. API_URL=http://192.168.0.103:5000 npm start.
// Without it the app uses the local mock data.
export const API_URL = typeof configuredUrl === 'string' && configuredUrl ? configuredUrl : null

export const REPOSITORIES_PATH = '/api/repositories'
