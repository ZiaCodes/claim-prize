import { Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/register';
import About from './components/about'
import Home from './container/Home';


const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="about" element={<About />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default App;
