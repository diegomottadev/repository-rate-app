module.exports = {
    preset: 'jest-expo',
    // React Native loads its modules lazily, so with a cold cache the first
    // render of each suite also pays for transforming them. 5s isn't enough.
    testTimeout: 15000
}
