import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/mangas' element={<ItemListContainer />} />
          <Route path='/libros' element={<ItemListContainer />} />
          <Route path='/productos/:id' element={<ItemDetailContainer />} />
        </Routes>

        
        {/*<ItemCount stock="5"/>*/}
        {/*<ItemDetailContainer />*/}
      </div>
    </BrowserRouter>
  );
}

export default App;
