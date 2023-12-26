import { lazy } from "react";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

const AuthLayout = lazy(() => import(`@/layouts/AuthLayout`));
const SignIn = lazy(() => import(`@/pages/SignIn`));
const SignUp = lazy(() => import(`@/pages/SignUp`));

const DocumentDetail = lazy(() => import(`@/pages/DocumentDetail`));

const PageNotFound = lazy(() => import(`@/pages/NotFound`));

const routes: RouteObject[] = [
  {
    path: "",
    // element: <Navigate to="/auth/sign-in" replace />,
    element: <Navigate to="/123/detail" replace />,
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
  {
    path: "/:documentId/detail",
    element: <DocumentDetail />,
  },
  { path: "*", element: <PageNotFound /> },
];

export const Router = () => {
  return useRoutes(routes);
};

export default Router;
