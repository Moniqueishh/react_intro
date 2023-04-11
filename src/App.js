import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './views/Home';
import Shop from './views/Shop';
import Login from './views/Login';
import Register from './views/Register';

function App() { 

  return (

    <div className="App">
      <Nav />
      <Routes>

        <Route children path= '/' element={<Home />} />
        <Route children path= '/shop' element={<Shop />} />
        <Route children path= '/login' element={<Login />} />
        <Route children path= '/register' element={<Register />} />

      </Routes>

      </div>
      
  );
}

export default App;