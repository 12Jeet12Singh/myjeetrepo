const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const {typeDefs,resolvers} = require('./data/schema');

const port = require('./config');

const app = express();

/*const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!'
  },
};*/

const server = new ApolloServer({ typeDefs, resolvers });
//const server = new ApolloServer({ makeExecutableSchema });
server.applyMiddleware({ app });


app.listen( port , () =>
  console.log(`Server ready at http://localhost:${port.port}${server.graphqlPath}`)
)