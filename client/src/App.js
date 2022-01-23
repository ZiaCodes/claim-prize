import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Login from './components/login';
import About from './components/about'
import Home from './container/Home';

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="about" element={<About />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default App;
