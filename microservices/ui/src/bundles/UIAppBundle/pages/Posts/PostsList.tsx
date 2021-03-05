import { newSmart, useSmart } from "@kaviar/x-ui";
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

  return (
    <Provider>
      <div className="page-posts-list">
        <div>
          <input
            name="Search"
            placeholder="Search"
            className="search"
            onKeyUp={(e) => {
              const value = (e.target as HTMLInputElement).value;
              api.setFilters({
                title: new RegExp(`${value}`, "i"),
              });
            }}
          />
        </div>
        {api.state.isLoading && <div>Loading</div>}
        {!api.state.isLoading && <PostsListTable />}
      </div>
    </Provider>
  );
}

function PostsListTable() {
  const api = useSmart(PostsListSmart);
  const { documents } = api.state;

  return (
    <>
      <table>
        <tr>
          <td>Total: {api.state.totalCount}</td>
          <td>Per Page: {api.config.perPage}</td>
        </tr>
        <tr>
          <th>Title</th>
          <th>User</th>
          <th>Actions</th>
        </tr>
        {documents.map((post) => {
          return (
            <tr>
              <td>{post.title}</td>
              <td>{post.user?.profile?.firstName}</td>
              <td></td>
            </tr>
          );
        })}
      </table>
      <ReactPaginate
        pageCount={api.pageCount}
        forcePage={api.state.currentPage - 1}
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={({ selected }) => {
          api.setCurrentPage(selected + 1);
        }}
      />
    </>
  );
}
