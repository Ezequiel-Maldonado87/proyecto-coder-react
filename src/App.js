import React, { createContext } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemlistContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import { createContext } from 'react';

export const Context = createContext ()

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        {/*<NavBar />*/}
        {/*<ItemListContainer greeting="Bienvenidos"/>*/}
        {/*<ItemCount initial="0" stock="10"/>*/}
        {/*<ItemDetailContainer/>*/}
        {/*</header>*/}

      <Context.Provider value={123}>
        <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path='/' element={ <ItemListContainer greeting="Bienvenidos"/> }/>
              <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting="Categorias"/>}/>
              <Route path='/detail/:productoId' element={<ItemDetailContainer/>}/>
            </Routes>
        </BrowserRouter>
      </Context.Provider>

    </div>
  );
}

export default App;

