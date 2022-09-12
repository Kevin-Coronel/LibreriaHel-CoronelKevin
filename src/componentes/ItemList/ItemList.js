import './ItemList.scss'
import Item from '../Item/Item';
import prod from '../../mock/prod.mocks'
import {useState, useEffect, useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../firebaseConfig';

const ItemList = () =>{

   const [listProd, setListProd] = useState([])

    const {category} = useParams ();

    const getProducts = async () => {
        const productCollection = collection (db, 'products')
        const productSnapshot = await getDocs (productCollection)
        const productList = productSnapshot.docs.map ( (doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList
    }

   useEffect(() =>{
        getProducts()
        
        .then ((res) =>{
            setListProd(res)
        })
   },[])

    return(
        <div class='div-container'>
            {listProd.map( product => <Item key={product.id} data={product}/>)}
        </div> 
    )
}

export default ItemList;