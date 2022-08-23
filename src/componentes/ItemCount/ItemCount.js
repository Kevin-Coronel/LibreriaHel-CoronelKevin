import './ItemCount.scss';
import {useState, useContext} from 'react'
import { CartContext } from '../../context/CartContext';

const ItemCount = ({quantitySelected, productData}) =>{
    const [count, setCount] = useState(1)
    const {addProductToCart} = useContext (CartContext)

    const addCount = () =>{
        setCount (count + 1)
    }

    const susCount = () =>{
        setCount (count - 1)
    }

    const onAdd = () =>{
        // console.log("Agregado: ", productData)
        quantitySelected(count)
        addProductToCart(productData)
    }

    return(
        <>
            <div class="div-count">
                <button class="buttonAr" onClick={susCount}>-</button>
                <p class="num">{count}</p>
                <button class="buttonAr" onClick={addCount}>+</button>
            </div>

            <button class="buttonAdd" onClick={onAdd}>AGREGAR AL CARRITO</button>
        </>
        
    )
    
}

export default ItemCount;