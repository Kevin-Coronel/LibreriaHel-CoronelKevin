import './Item.scss'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({data}) =>{

    const {title, imagen,price}=data

    return( 
        <div class='div-item'>
            <img src={`./recursos/${imagen}`} alt='tokyo'/>
            <p>{title}</p>
            <p>{price}</p>
            <ItemCount stock/>
            <button>Comprar</button>
        </div>
    )
}

export default Item