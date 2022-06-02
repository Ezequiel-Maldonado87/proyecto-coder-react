import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemlistContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        {/*<NavBar />*/}
        {/*<ItemListContainer greeting="Bienvenidos"/>*/}
        {/*<ItemCount initial="0" stock="10"/>
        <ItemDetailContainer/>
  </header>*/}

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ <ItemListContainer greeting="Bienvenidos"/> }/>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting="Categorias"/>}/>
          <Route path='/detail/:productoId' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

