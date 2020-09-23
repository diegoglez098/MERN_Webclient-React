//Layout

import LayoutAdmin from "../layouts/LayoutAdmin";

//Admin Pages

import AdminHome from "../pages/admin";

import AdminSignIn from "../pages/admin/SignIn";

const routes = [
  {
    path: "/admin",
    component: LayoutAdmin,
    exact: false,
    routes: [
      {
        path: "/admin",
        component: AdminHome,
        exact: true,
      },
      {
        path: "admin/login",
        component: AdminSignIn,
        exact: true,
      },
    ],
  },
];

export default routes;
