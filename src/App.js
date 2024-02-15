import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./pages/Browse";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Body from "./pages/Body";
import Login from "./pages/Login";
import Watch from "./pages/Watch";
import GptSearch from "./pages/GptSearch";

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
        {
          path: "/gpt/search",
          element: <GptSearch />,
        },
        {
          path: "/watch/:movieId",
          element: <Watch />,
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
