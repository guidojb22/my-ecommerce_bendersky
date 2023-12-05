import ItemListContainer from './components/itemListContainer';
import NavBar from './components/NavBar/NavBar';

import './App.css'

function App() {
  return (
    <div id="app">
      <NavBar />
      <ItemListContainer saludo={"Bienvenido a MeluTienda"} />
    </div>
  )
}

export default App