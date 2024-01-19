import Nav from "./components/Nav";
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
