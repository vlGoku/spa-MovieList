import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootElement, {
  loader as rootLoader,
  action as rootAction,
} from "./components/RootElement";
import ErrorPage from "./components/ErrorPage";
import Movie, { loader as movieLoader } from "./components/Movie";
import EditMovie, { action as editAction } from "./components/EditMovie";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootElement />,
      errorElement: <ErrorPage />,
      loader: rootLoader,
      action: rootAction,
      children: [
        {
          path: "/movies/:id",
          element: <Movie />,
          loader: movieLoader as any,
        },
        {
          path: "/movies/:id/edit",
          element: <EditMovie />,
          loader: movieLoader as any,
          action: editAction as any,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
