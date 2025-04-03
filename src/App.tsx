import React from 'react';
import './App.css';
import Register from './pages/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/register" element={<Register />} />
                <Route path="/" element={<App/>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;