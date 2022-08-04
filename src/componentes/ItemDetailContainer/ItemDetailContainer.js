import './ItemDetailContainer.scss';
import ItemDetail from '../ItemDetail/ItemDetail';
import prod from '../../mock/prod.mocks';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () =>{

        const { id } = useParams()

        const [productData, setProductData] = useState ({})

        const filtroProd = () =>{
            prod.some( (product) => {
                if (product.id == id) {
                    setProductData (product)
                }
            } )
        }

        useEffect( () =>{
            filtroProd()
        }, [])

    return(
        <div>
            <ItemDetail data={productData}/>
        </div>
    )
}

export default ItemDetailContainer;