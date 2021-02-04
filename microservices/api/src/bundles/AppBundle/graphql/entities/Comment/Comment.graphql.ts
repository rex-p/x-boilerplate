export default /* GraphQL */ `
  type Comment {
    content: String!
    _id: ObjectId!
    user: User
    post: Post
  }
`;
