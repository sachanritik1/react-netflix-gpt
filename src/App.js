import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./component/Browse";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Body from "./component/Body";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/",
      element: <Body />,
    },
  ]);
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
