import { RouterProvider, createBrowserRouter } from "react-router";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Watch from "./components/Watch";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <Watch />,
        },
      ],
    },
  ]);
  return (
    <div className="bg-[#0f0f0f] h-screen w-full">
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
