export default /* GraphQL */ `
  type Subscription {
    postsSubscription(body: EJSON): SubscriptionEvent
  }
`;
