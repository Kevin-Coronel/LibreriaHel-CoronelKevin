import './ItemList.scss'
import Item from '../Item/Item';
import prod from '../../mock/prod.mocks'
import {useState,useEffect} from 'react';

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
            {console.log("Estado: ", listProd)}
            {listProd.map( product => <Item key={product.id} data={product}/>)}
        </div> 
    )
}

export default ItemList;