//importer les commponents 
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import React from 'react';
import Register from './pages/Register';
import Single from './pages/Single';
import Write from './pages/Write';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//Définir les routers
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
{
  path: "/register",
  element: <Register/>
},
{
  path: "/login",
  element: <Login/>
},
{
  path: "/write",
  element:<Write/>
},
{
  path: "/single",
  element: <Single/>
}

]);

function App() {
  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
