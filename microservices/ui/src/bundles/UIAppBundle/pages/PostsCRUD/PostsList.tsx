import { use } from "@kaviar/x-ui";
import { useEffect, useState } from "react";
import { Post, PostsCollection } from "../../collections";

export function PostsList() {
  const postsCollection = use(PostsCollection);
  const [data, setData] = useState<Post[]>([]);
  const [isReady, setIsReady] = useState<boolean>(false);
  useEffect(() => {
    postsCollection
      .find(
        {},
        {
          _id: 1,
          title: 1,
        }
      )
      .then((data) => {
        setData(data);
        setIsReady(true);
      });
  }, [postsCollection]);

  if (!isReady) {
    return <div>Loading</div>;
  } else {
    return (
      <ul>
        {data.map((post) => {
          return <li>{post.title}</li>;
        })}
      </ul>
    );
  }
}
