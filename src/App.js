import Exercise from "./components/Exercise";
import Language from "./components/Language";
import Nav from "./components/Nav";
import UserProfile from "./components/UserProfile";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Nav />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/login',
          element: <LoginPage />
        },
        {
          path: '/signup',
          element: <SignUp />
        },
        {
          path:'/language',
          element:<Language/>
        },
        {
          path:'/profile',
          element:<UserProfile/>
        },
        {
          path:'/exercises',
          element:<Exercise/>
        }

      ]
    }
  ])
  return (
    <RouterProvider router={router}>
      <div className="w-full">
      </div>
    </RouterProvider>
  );
}

export default App;
