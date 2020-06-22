import React from "react";
import HomePage from "../pages/HomePage";
// import StudentActionPage from '../pages/StudentActionPage'
import NotFoundPage from "../pages/NotFoundPage";
// import SearchResultPage from '../pages/SearchResultPage'
const routes = [
  {
    path: "/",
    exact: true,
    content: () => <HomePage />,
  },
  // {
  //   path: '/student/add',
  //   exact: true,
  //   content: ({ history }) => <StudentActionPage history={history} />
  // },
  // {
  //   path: '/student/:id/edit',
  //   exact: true,
  //   content: ({ match, history }) => <StudentActionPage match={match} history={history} />
  // },
  // {
  //   path: '/search',
  //   exact: true,
  //   content: ({ match, history, location }) => <SearchResultPage match={match} history={history} location={location} />
  // },
  {
    path: "",
    exact: false,
    content: () => <NotFoundPage />,
  },
];
export default routes;
