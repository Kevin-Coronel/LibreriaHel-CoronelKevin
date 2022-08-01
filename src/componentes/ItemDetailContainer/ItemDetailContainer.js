import './ItemDetailContainer.scss';
import ItemDetail from '../ItemDetail/ItemDetail';
import detailProd from '../../mock-detail/mock-detail';
import { useEffect, useState } from 'react';

const ItemDetailContainer = () =>{

    const [detailListProd, setdetailListProd] = useState([])

    const detailProduct= new Promise ( (resolve, reject) => {
        setTimeout (()=> {
            resolve(detailProd)
        }, 2000)
    })

    useEffect(() =>{
        detailProduct.then((response) => {
                setdetailListProd(response)
        })
   },[])

    return(
        <div>
            {detailListProd.map( detailProduct => <ItemDetail detalleProducto={detailProduct}/>)}
        </div>
    )
}

export default ItemDetailContainer;