import './App.css';
import Signup from './Screen/Signup';
import Login from './Screen/Login'
import { Routes, Route } from "react-router-dom"
import Main from './Component/main';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Sidebar" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
