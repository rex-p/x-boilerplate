export default /* GraphQL */ `
  type Query {
    usersFindOne(query: QueryInput!): User
    usersFind(query: QueryInput): [User]!
    usersCount(filters: EJSON!): Int!
  }

  # type Mutation {
  #   usersInsertOne(document: EJSON!): User
  #   usersUpdateOne(_id: ObjectId!, modifier: EJSON!): User!
  #   usersDeleteOne(_id: ObjectId!): Boolean
  # }
`;
