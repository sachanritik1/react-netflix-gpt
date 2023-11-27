import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./component/Browse";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Body from "./component/Body";
import Login from "./component/Login";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/browse",
          element: <Browse />,
        },
      ],
    },
  ]);
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
