import './ItemListContainer.scss';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () =>{
    return(
        <div>
            <h1 class="greet">PRODUCTOS DESTACADOS</h1>
            <ItemList />
        </div>

    )
}

export default ItemListContainer;