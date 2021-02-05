import { useRouter } from "@kaviar/x-ui";
import React from "react";
import { POSTS_LIST, POSTS_LIST_LIVE } from "../routes";

export const HomePage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Welcome to KAVIAR</h1>
      <ul>
        <li>
          <button onClick={() => router.go(POSTS_LIST)}>Posts Page</button>
        </li>
        <li>
          <button onClick={() => router.go(POSTS_LIST_LIVE)}>
            Posts Page w. Live Data
          </button>
        </li>
      </ul>
    </div>
  );
};
