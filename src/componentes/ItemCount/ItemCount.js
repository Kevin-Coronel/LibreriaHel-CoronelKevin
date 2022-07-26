import './ItemCount.scss';
import {useState} from 'react'

const ItemCount = ({stock}) =>{
    let [count, setCount] = useState(1)

    const addNumber = () =>{
        if(count < stock){
            setCount(count + 1)
        }
    }

    const susNumber = () =>{
        setCount(count - 1)

        if(count === 0){
            setCount(count = 0)
        }
    }

    return(

        <div class="div-count">
            <button onClick={susNumber}>-</button>
            <p>{count}</p>
            <button onClick={addNumber}>+</button>
        </div>
    )
    
}

export default ItemCount;