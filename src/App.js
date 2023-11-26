import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./component/Browse";
import Login from "./component/Login";

const appRouter = createBrowserRouter([
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/",
    element: <Login />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
