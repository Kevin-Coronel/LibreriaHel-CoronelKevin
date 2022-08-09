import './ItemCount.scss';
import {useState} from 'react'

const ItemCount = ({quantitySelected}) =>{
    const [count, setCount] = useState(1)

    const addCount = () =>{
        setCount (count + 1)
    }

    const susCount = () =>{
        setCount (count - 1)
    }

    const onAdd = () =>{
        quantitySelected(count)
    }

    return(
        <>
            <div class="div-count">
                <button class="buttonAr" onClick={susCount}>-</button>
                <p class="num">{count}</p>
                <button class="buttonAr" onClick={addCount}>+</button>
            </div>

            <button class="buttonAdd" onClick={onAdd}>AÑADIR AL CARRITO</button>
        </>
        
    )
    
}

export default ItemCount;