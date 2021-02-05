import { use, useCollectionSubscription } from "@kaviar/x-ui";
import { Post, PostsCollection } from "../../collections";

export function PostsListLive() {
  const postsCollection = use(PostsCollection);
  const [posts, isReady] = useCollectionSubscription(PostsCollection, {
    _id: 1,
    title: 1,
  });

  if (!isReady) {
    return <div>Loading</div>;
  } else {
    return (
      <ul>
        <li>Live Data</li>
        {posts.map((post) => {
          return (
            <li key={post._id.toString()}>
              {post.title}{" "}
              <button onClick={() => postsCollection.deleteOne(post._id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
