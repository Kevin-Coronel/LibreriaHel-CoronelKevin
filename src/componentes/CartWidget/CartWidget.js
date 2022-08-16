import { Link } from 'react-router-dom';
import './CartWidget.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () =>{

    const { cartProducts , totalProducts } = useContext(CartContext)

    return (
        <div class="cartWid">
            {cartProducts.length !== 0 && <p class="text">{totalProducts}</p>}
            <Link to="/cart"><img class='img-cart' src="./recursos/shopping-cart.png" alt="carrito"/></Link>
        </div> 
    )
}

export default Cart;