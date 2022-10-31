import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import ModalCreateTask from './components/molecoles/modal';
import NavBar from './components/molecoles/navBar';
import About from './components/pages/about';
import Home from './components/pages/todoList';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/ModalCreateTask' element={<ModalCreateTask/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
