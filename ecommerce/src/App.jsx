import React from 'react';
import './App.css';

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./layout/Layout";
import  Home  from "./Pages/Home/Home";
import  Items  from "./Pages/Items/Items";
import  Profaile  from "./Pages/Profaile/Profaile";
import ChatBot from './Pages/ChatBot';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
     // <Route>
      //<Route path="/login" element={<Login />}></Route>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/items" element={<Items />}></Route>
        <Route path="/chatbot" element={<ChatBot />}></Route>
        <Route path="/profail" element={<Profaile />}></Route>
      </Route>
      //</Route>
    )
  );
  return <RouterProvider router={router}/>
}

export default App
