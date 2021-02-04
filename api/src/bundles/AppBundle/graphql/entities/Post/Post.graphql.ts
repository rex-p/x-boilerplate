export default /* GraphQL */ `
  type Post {
    title: String!
    _id: ObjectId!
    comments: [Comment]
    user: User
    tags: [Tag]
  }
`;
