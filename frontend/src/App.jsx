import { createBrowserRouter, RouterProvider, Route, Outlet} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Single from "./pages/Single";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./style.scss";
import Perfil from "./pages/Perfil";

//MVP1
//Tela de Login 
//Tela de Registro ( nome, matricula, email, senha, telefone )
//Tela de Caronas ( todas carronas disponiveis com vagas, origem, destino, horario, data, telefone )
//Tela da Carrona Especifica ( ver mais informações )
//Tela de Criar Carrona ( origem, destino, horario, data, vagas, descrição )
//Tela de Deletar carrona ( ou botão especifico )
//

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path:"/post/:id",
        element: <Single/>,
      },
      {
        path:"/write",
        element: <Write/>,
      },
      {
        path:"/perfil",
        element: <Perfil />
      }
    ],
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/write",
    element: <Write/>,
  },
  {
    path: "/single",
    element: <Single/>,
  },
  { 
    path: "/perfil",
    element: <Perfil/>,
  }

]);

function App() {
  return (
    <div className="app">
      <div className="container">
      <RouterProvider router={router} />

      </div>
    </div>
  );
}



export default App;
