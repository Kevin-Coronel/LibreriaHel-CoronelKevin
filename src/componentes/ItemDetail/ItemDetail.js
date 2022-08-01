import './ItemDetail.scss'

const ItemDetail = ({detalleProducto}) =>{

    const {title,img,price,desc,alt} = detalleProducto

    return(
        <div class="display">
            <p class='detail-title'>{title} </p>
            <img class='size-img' src={`./recursos/${img}`} alt={`${alt}`}/>
            <p class='price'>{price}</p>
            <p class="sub-title">Descripción:</p>
            <p class="description">{desc}</p>
            <button class="button">AGREGAR AL CARRITO</button>
        </div>
    )
}

export default ItemDetail;