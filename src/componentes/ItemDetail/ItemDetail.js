import './ItemDetail.scss'


const ItemDetail = ({data}) =>{

    // const {title,imagen,price,desc,alt} = detalleProducto

    return(
        <div class="display">
            <h2 class='detail-title'>{data.title} </h2>
            <img class='size-img' src={`../recursos/${data.imagen}`} alt={`${data.alt}`}/>
            <p class='price'>{data.price}</p>
            <p class="sub-title">Autor:</p>
            <p class="autor">{data.autor}</p>
            <p class="sub-title">Descripción:</p>
            <p class="description">{data.desc}</p>
            <button class="button">AGREGAR AL CARRITO</button>
        </div>
    )
}

export default ItemDetail;