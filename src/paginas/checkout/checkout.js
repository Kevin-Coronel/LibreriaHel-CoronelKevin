import './Checkout.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Checkout = () => {

    const { cartProducts } = useContext(CartContext)
    
    {console.log("carro desde checkout: ", cartProducts)}
    
    
        cartProducts.map((product) => {
            return(
                <div class="divCart" key={product.id} >
                    <img src={`../recursos/${product.imagen}`} alt={`tokyo`}/>
                    <h2>{product.title}</h2>
                    <p>{product.price}</p>
                    <button>X</button>
                </div>
            )    
        })
    
    
    // return (
    //     <div>
    //         <h1 class="titH1">CARRITO DE COMPRAS</h1>
            
    //         <>
    //             <div class="divCart" >
    //                 <img src={`../recursos/img-1.jpg`} alt={`tokyo`}/>
    //                 <h2>Tokyo Revengers </h2>
    //                 <p>$750,00</p>
    //                 <button>X</button>
    //             </div>
    //         </>
    //     </div>
    // )
}

export default Checkout