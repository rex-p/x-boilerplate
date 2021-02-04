export default /* GraphQL */ `
  type User {
    _id: ObjectId!
    profile: UserProfile
  }

  type UserProfile {
    firstName: String!
    lastName: String!
  }
`;
