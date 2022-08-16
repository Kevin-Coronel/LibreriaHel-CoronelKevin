import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import ItemList from './componentes/ItemList/ItemList';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Checkout from './paginas/checkout/checkout';
import Cart from './componentes/Cart/Cart';
import CartProvider from './context/CartContext';

function App() {
  return (

    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />

          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/mangas' element={<ItemListContainer section="mangas"/>} />
            <Route path='/category/libros' element={<ItemListContainer />} />
            <Route path='/productos/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>

          {/*<ItemCount stock="5"/>*/}
          {/*<ItemDetailContainer />*/}
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
