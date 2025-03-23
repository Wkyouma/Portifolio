import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';
import Cabecalho from './Componentes/Cabecalho';


function AppRoutes() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-black">
     
        <Cabecalho />  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<h1>Page Not Found</h1>} /> 
        </Routes>
      </div>
    </BrowserRouter> 
  );
}

export default AppRoutes;