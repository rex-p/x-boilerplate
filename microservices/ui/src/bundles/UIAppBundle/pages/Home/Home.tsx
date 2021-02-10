import { useRouter } from "@kaviar/x-ui";
import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../components";
import * as Routes from "../../routes";

export const HomePage = () => {
  const router = useRouter();

  return (
    <Layout>
      <div className="page-Home">
        <div className="logo-wrapper">
          <img src="https://www.kaviarjs.com/img/logo.png" alt="logo" />
        </div>
        <h1>Welcome to X-Framework</h1>
        <table className="table">
          <tr>
            <th>Page</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>
              <Link to={router.path(Routes.POSTS_LIST)}>Posts Page</Link>
            </td>
            <td>
              This illustrates an example of how we render a list with filters,
              pagination, sorting options, relational sorting.
            </td>
          </tr>
          <tr>
            <td>
              <Link to={router.path(Routes.POSTS_LIST_LIVE)}>Posts Live</Link>
            </td>
            <td>
              In here you will see how easily it is to build live data out of
              the box. Works with relational data also.
            </td>
          </tr>
          <tr>
            <td>
              <Link to={router.path(Routes.LOGIN)}>Login</Link>
              <br />
              <br />
              <Link to={router.path(Routes.REGISTER)}>Register</Link>
              <br />
              <br />
              <Link to={router.path(Routes.CHANGE_PASSWORD)}>
                Change Password
              </Link>
              <br />
              <br />
              <Link to={router.path(Routes.FORGOT_PASSWORD)}>
                Forgot Password
              </Link>
            </td>
            <td>
              Here you have your full suite of registration, authentication,
              email verification with everything customisable.
            </td>
          </tr>
        </table>
      </div>
    </Layout>
  );
};
