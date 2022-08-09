import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import ItemList from './componentes/ItemList/ItemList';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Checkout from './paginas/checkout/checkout';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/mangas' element={<ItemListContainer/>} />
          <Route path='/category/libros' element={<ItemListContainer />} />
          <Route path='/productos/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Checkout/>} />
        </Routes>

        
        {/*<ItemCount stock="5"/>*/}
        {/*<ItemDetailContainer />*/}
      </div>
    </BrowserRouter>
  );
}

export default App;
