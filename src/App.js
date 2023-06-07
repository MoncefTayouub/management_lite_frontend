import logo from './logo.svg';
import './App.css';
import React , {useState , useEffect} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Project from './pages/Project';
function App() {
  var backend_url = 'moncef980.pythonanywhere.com/'
  return (
    <div className="App">
           <BrowserRouter>
              <Routes>
                    <Route path="/" element={<Home  backend_url={backend_url}  />} />    
                    <Route path="/Project/:id" element={<Project  backend_url={backend_url}  />} />    
                </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;