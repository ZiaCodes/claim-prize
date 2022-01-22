import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Home from "./Container/Home";

const App = () => {
  return(
    <Routes>
      <Route path="/*" element={<Home/>} />
    </Routes>
  )
};

export default App;
