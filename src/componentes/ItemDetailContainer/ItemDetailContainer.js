import './ItemDetailContainer.scss';
import ItemDetail from '../ItemDetail/ItemDetail';
import prod from '../../mock/prod.mocks';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//Firebase
import db from '../../firebaseConfig';
import { doc, getDoc, getDocs} from 'firebase/firestore'
import { async } from '@firebase/util';

const ItemDetailContainer = () =>{

        const { id } = useParams()

        const [productData, setProductData] = useState ({})

        useEffect( () =>{
            // filtroProd()
            getProduct ()
            .then ((res) => {
                setProductData(res)
            })
        }, [id])


        const getProduct = async () =>{
            const docRef = doc(db, 'products', id)
            const docSnapshot = await getDoc (docRef)
            let product = docSnapshot.data()
            product.id = docSnapshot.id
            return product
        }

    return(
        <div>
            <ItemDetail data={productData}/>
        </div>
    )
}

export default ItemDetailContainer;