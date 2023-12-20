import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div id="app">
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer saludo="Bienvenido a MeluTienda" />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer saludo="Bienvenido a MeluTienda" />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App