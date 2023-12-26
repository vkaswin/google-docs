import { lazy } from "react";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

let AuthLayout = lazy(() => import(`@/layouts/AuthLayout`));
let SignIn = lazy(() => import(`@/pages/SignIn`));
let SignUp = lazy(() => import(`@/pages/SignUp`));

let PageNotFound = lazy(() => import(`@/pages/NotFound`));

let routes: RouteObject[] = [
  {
    path: "",
    element: <Navigate to="/auth/sign-in" replace />,
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: (
          <ProtectedRoute
            children={<SignIn />}
            isAuthenticated={false}
            redirectIfLogin
          />
        ),
      },
      {
        path: "sign-up",
        element: (
          <ProtectedRoute
            children={<SignUp />}
            isAuthenticated={false}
            redirectIfLogin
          />
        ),
      },
    ],
  },
  { path: "*", element: <PageNotFound /> },
];

export const Router = () => {
  return useRoutes(routes);
};

export default Router;
