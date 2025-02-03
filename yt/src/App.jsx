import "./App.css";
import Body from "./Components/Body";
import Head from "./Components/Head";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import Watchpage from "./Components/Watchpage";
import { useState } from "react";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer searchQuery={searchQuery} />,
        },
        {
          path: "watch",
          element: <Watchpage />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <div>
        <Head setSearchQuery={setSearchQuery} />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
};

export default App;