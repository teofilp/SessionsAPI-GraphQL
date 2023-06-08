const { ApolloServer } = require("apollo-server");

const SpeakerAPI = require('./datasources/speakers');
const SessionAPI = require('./datasources/sessions');
const typeDefs = require('./schema.js');
const resolvers = require('./resolvers.js');

const dataSources = () => ({
  SessionAPI: new SessionAPI(),
  SpeakerAPI: new SpeakerAPI()
})

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`graphQL running at ${url}`);
});
