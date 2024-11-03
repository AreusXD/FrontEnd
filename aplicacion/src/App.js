import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Editar from './components/Editar';
import Nuevo from './components/Nuevo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/nuevo' element={<Nuevo />} />
        <Route path='/editar' element={<Editar />} />
      </Routes>
    </Router>
  );
}

export default App;
