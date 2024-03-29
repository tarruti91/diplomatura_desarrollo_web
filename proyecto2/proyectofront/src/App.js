import './App.css';
import './estilos/layout.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './componentes/layout/Footer';
import Header from './componentes/layout/Header';

import Alquileres from './paginas/Alquileres';
import Contacto from './paginas/Contacto';
import Experiencias from './paginas/Experiencias';
import Fail from './paginas/Fail';
import Home from './paginas/Home';
import Nosotros from './paginas/Nosotros';
import Novedades from './paginas/Novedades';
import Servicios from './paginas/servicios';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/fail' element={<Fail />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/experiencias' element={<Experiencias />} />
          <Route path='/alquileres' element={<Alquileres />} />
          <Route path='/novedades' element={<Novedades />} />
          <Route path='/servicios' element={<Servicios />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
