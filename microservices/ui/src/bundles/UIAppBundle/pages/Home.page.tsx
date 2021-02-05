import { useRouter } from "@kaviar/x-ui";
import React from "react";
import { POSTS_LIST } from "../routes";

export const HomePage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Welcome to KAVIAR</h1>
      <ul>
        <li>
          <button onClick={() => router.go(POSTS_LIST)}>Posts Page</button>
        </li>
      </ul>
    </div>
  );
};
