import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/*<ItemListContainer />*/}
      {/*<ItemCount stock="5"/>*/}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
