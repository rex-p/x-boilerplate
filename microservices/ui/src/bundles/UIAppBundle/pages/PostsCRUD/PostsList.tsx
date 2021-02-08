import { newSmart, QueryBodyType, use, useSmart } from "@kaviar/x-ui";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { PostsListSmart } from "./PostListSmart";

export function PostsList() {
  const [api, Provider] = newSmart(PostsListSmart, {
    perPage: 5,
    // sort: {
    //   title: 1,
    //   // Relational Sorting:
    //   // "user.profile.firstName": -1,
    // },
  });

  if (api.state.isLoading) {
    return <div>Loading</div>;
  } else {
    return (
      <Provider>
        <input
          name="Search"
          placeholder="Search"
          onKeyUp={(e) => {
            const value = (e.target as HTMLInputElement).value;
            api.setFilters({
              title: {
                $regex: new RegExp(`${value}`),
              },
            });
            // api.set
            // api.setF
          }}
        />

        <PostsListTable />
      </Provider>
    );
  }
}

function PostsListTable() {
  const api = useSmart(PostsListSmart);
  const { documents } = api.state;

  return (
    <ul>
      <li>Total: {api.state.totalCount}</li>
      {documents.map((post) => {
        return (
          <li>
            {post.title} {post.user?.profile?.firstName}
          </li>
        );
      })}
      <li>
        Paginate: Pages: {api.pageCount} | Current: {api.state.currentPage}
        <ReactPaginate
          pageCount={api.pageCount}
          forcePage={api.state.currentPage - 1}
          onPageChange={({ selected }) => {
            api.setCurrentPage(selected + 1);
          }}
        />
      </li>
    </ul>
  );
}
