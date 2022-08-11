import './ItemList.scss'
import Item from '../Item/Item';
import prod from '../../mock/prod.mocks'
import {useState, useEffect, useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import { useParams } from 'react-router-dom';

const ItemList = () =>{

   const [listProd, setListProd] = useState([])

   const products = new Promise( (resolve, reject) => {
            resolve(prod)
   })

   useEffect(() =>{
        products.then((response) => {
                setListProd(response)
        })
   },[])

    return(
        <div class='div-container'>
            {listProd.map( product => <Item key={product.id} data={product}/>)}
        </div> 
    )
}

export default ItemList;