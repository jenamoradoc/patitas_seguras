import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { CuidadorPage, HomePage, OpenCardPage } from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/cuidador",
    element: <CuidadorPage />,
  },
  {
    path: "/info",
    element: <OpenCardPage />,
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
