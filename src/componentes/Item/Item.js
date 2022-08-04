import './Item.scss'
import { Link } from 'react-router-dom'

const Item = ({data}) =>{

    const {id, title, imagen, price}=data

    return( 

        <Link to={`/productos/${id}`}>
            <div class='div-item'>
                <img src={`./recursos/${imagen}`} alt='tokyo'/>
                <p class="tarjTit">{title}</p>
                <p class="tarjPrice">{price}</p>
                <button class="botonMain">AGREGAR AL CARRITO</button>
            </div>
        </Link>
    )
}

export default Item