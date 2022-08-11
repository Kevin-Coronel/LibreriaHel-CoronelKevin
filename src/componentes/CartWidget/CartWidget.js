import { Link } from 'react-router-dom';
import './CartWidget.scss'

const Cart = () =>{
    return (
        <Link to="/cart"><img class='img-cart' src="./recursos/shopping-cart.png" alt="carrito"/></Link>
    )
}

export default Cart;