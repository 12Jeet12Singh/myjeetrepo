const { ApolloServer, gql } = require('apollo-server-express');

const resolvers = require('./resolvers');

const typeDefs = gql`
type Query {
  mails: [Mail]
  mail(id: String!): Mail
}

type Mutation {
  mail(subject: String!, receiver: String!, content: String!): Mail
}

type Mail {
  subject: String
  receiver: String
  content: String
  _id: String
}
`;

module.exports = {typeDefs,resolvers};
