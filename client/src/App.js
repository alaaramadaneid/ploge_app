//importer les commponents 
import Home from './pages/Home';
import Login from './pages/Login';
import React from 'react';
import Register from './pages/Register';
import Single from './pages/Single';
import Write from './pages/Write';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./style.scss";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

const Lyaout = () =>{
  return(
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
//Définir les routers
const router = createBrowserRouter([
  {
    path: "/",
    element: <Lyaout/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/post/:id",
        element: <Single/>
      },
      {
        path: "/write",
        element:<Write/>
      },
      
     
    ]
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/login",
    element: <Login/>
  },

]);

function App() {
  return (
    <div className="App">
      <div className="container">
      <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
