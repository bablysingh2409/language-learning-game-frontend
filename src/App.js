import Exercise from "./components/Exercise";
import Language from "./components/Language";
import Nav from "./components/Nav";
import UserProfile from "./components/UserProfile";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import { Navigate, Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import UserPage from "./pages/UserPage";
import { useSelector } from 'react-redux';
import { userDetailSelector } from "./redux/reducers/userDetailsReducer";


function App() {
  const { isLogin } = useSelector(userDetailSelector);
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
          element: isLogin ? <Navigate to="/language" /> : <LoginPage />
        },
        {
          path: '/signup',
          element: isLogin ? <Navigate to="/language" /> : <SignUp />
        },
        {
          path: '/language',
          element: isLogin ? <Language /> : <Navigate to="/" />
        },
        {
          path: '/profile',
          element: isLogin ? <UserPage /> : <Navigate to="/" />
        },
      ]
    },
    {
      path:'/exercises/:language',
      element:<Exercise/>
    },
    
  ])
  return (
    <RouterProvider router={router}>
      <Routes>
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </RouterProvider>
  );
}

export default App;
