import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/index';
import './App.css';
import "../index.css"
import Cabecalho from './Componentes/Cabecalho';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>Page Not Found</h1>} /> 
      </Routes> 
    </BrowserRouter> 
  );
}

export default AppRoutes;
