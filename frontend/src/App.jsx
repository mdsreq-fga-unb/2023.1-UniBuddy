import { createBrowserRouter, RouterProvider, Route, Outlet, useLocation, useNavigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Single from "./pages/Single";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./style.scss";
import Perfil from "./pages/Perfil";
import Solicitacoes from "./pages/Solicitacoes";
import { useContext } from 'react';
import { AuthContext } from './context/authContext';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { token } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  if (!token) {
    navigate('/login', { state: { from: location } }); // Redireciona para a página de login se não houver token
    return null;
  }

  return <Element {...rest} />;
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <PrivateRoute element={Home} />,
      },
      {
        path: "/post/:id",
        element: <PrivateRoute element={Single} />,
      },
      {
        path: "/write",
        element: <PrivateRoute element={Write} />,
      },
      {
        path: "/perfil",
        element: <PrivateRoute element={Perfil} />,
      },
      {
        path: "/solicitacoes",
        element: <PrivateRoute element={Solicitacoes} />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  const { token } = useContext(AuthContext);

  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
