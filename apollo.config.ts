module.exports = {
  client: {
    service: {
      name: 'nubain-vangard',
      // URL to the GraphQL API
      url: 'http://localhost:8000/graphql',
    },
    // Files processed by the extension
    includes: ['src/**/*.vue', 'src/**/*.ts'],
  },
};
