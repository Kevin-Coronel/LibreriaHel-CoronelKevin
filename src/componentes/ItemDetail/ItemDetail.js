import './ItemDetail.scss';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react'
import { Link } from 'react-router-dom';

const ItemDetail = ({data}) =>{
    const [quantitySelected, setQuantitySelected] = useState (1)


    return(
        <div class="display">
            <h2 class='detail-title'>{data.title} </h2>
            <img class='size-img' src={`../recursos/${data.imagen}`} alt={`${data.alt}`}/>
            <p class='price'>{data.price}</p>
            <p class="sub-title">Autor:</p>
            <p class="autor">{data.autor}</p>
            <p class="sub-title">Descripción:</p>
            <p class="description">{data.desc}</p>
            
            {  quantitySelected > 1 ? <Link to="/cart"><button class="button">TERMINAR COMPRA</button></Link> : <ItemCount quantitySelected={setQuantitySelected} productData={data}/> }
            {/* <button class="button">AGREGAR AL CARRITO</button> */}
        </div>
    )
}

export default ItemDetail;