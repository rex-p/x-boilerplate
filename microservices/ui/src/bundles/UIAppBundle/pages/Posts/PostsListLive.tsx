import { use, useLiveData } from "@kaviar/x-ui";
import { PostsCollection } from "../../collections";

export function PostsListLive() {
  const postsCollection = use(PostsCollection);
  const { data: posts, isLoading } = useLiveData(
    PostsCollection,
    {
      filters: {},
      options: {},
    },
    {
      _id: 1,
      title: 1,
    }
  );

  if (isLoading) {
    return <div>Loading</div>;
  } else {
    if (posts) {
      return (
        <ul>
          <li>Live Data</li>
          {posts.map((post) => {
            return (
              <li key={post._id.toString()}>
                {post._id.toString()}
                <br />
                {post.title}{" "}
                <button onClick={() => postsCollection.deleteOne(post._id)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      );
    } else {
      return <div>Could not retrieve your data.</div>;
    }
  }
}
