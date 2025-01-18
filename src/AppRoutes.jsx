import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/index';
import './App.css';
import About from './Pages/About';
import Cabecalho from './Componentes/Cabecalho';
import Rodape from './Componentes/Rodape';



function AppRoutes() {
  return (
    <BrowserRouter>
    <Cabecalho></Cabecalho>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path="*" element={<h1>Page Not Found</h1>} /> 
      </Routes> 
      <Rodape></Rodape>
    </BrowserRouter> 
  );
}

export default AppRoutes;
