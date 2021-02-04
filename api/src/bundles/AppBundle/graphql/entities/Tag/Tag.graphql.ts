export default /* GraphQL */ `
  type Tag {
    name: String!
    _id: ObjectId!
    posts: [Post]
  }
`;
