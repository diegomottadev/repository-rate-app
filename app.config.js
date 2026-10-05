// app.json stays the base config. This file only adds values that come from
// the environment, so they work in native builds and in the web build.
// apiUrl is left out when API_URL is not set, so the app falls back to the
// mock data.
// BASE_URL is only set by build:pages, because GitHub Pages serves the app
// from /<repo>/ while `npm start` serves it from /.
export default ({ config }) => ({
    ...config,
    extra: {
        ...config.extra,
        ...(process.env.API_URL ? { apiUrl: process.env.API_URL } : {})
    },
    ...(process.env.BASE_URL
        ? { experiments: { ...config.experiments, baseUrl: process.env.BASE_URL } }
        : {})
})
