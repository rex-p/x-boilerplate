export default /* GraphQL */ `
  type Query {
    postsFindOne(query: QueryInput): Post
    postsFind(query: QueryInput): [Post]!
    postsCount(query: QueryInput): Int!
  }

  type Mutation {
    postsInsertOne(document: EJSON!): Post
    postsUpdateOne(_id: ObjectId!, modifier: EJSON!): Post!
    postsDeleteOne(_id: ObjectId!): Boolean
  }
`;
