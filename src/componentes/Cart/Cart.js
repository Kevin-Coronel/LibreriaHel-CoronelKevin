import './Cart.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cartProducts, removeFromCart, clearCart } = useContext(CartContext)
    
    // {console.log("carro desde checkout: ", cartProducts)}
    
    return(
        <div>
            <h1>CARRITO DE COMPRAS</h1>

            <div>
                {cartProducts.length > 0 ? (
                    <div>
                        {cartProducts.map((product) => {
                            return(
                                <div >
                                    <div class="divCart" key="product.id">
                                        <img src={`../recursos/${product.imagen}`} alt={`tokyo`} />
                                        <p>{product.title}</p>
                                        <p>{product.price}</p>
                                        <button onClick={() => removeFromCart (product.id)}>X</button>
                                    </div>
                                </div>
                            )
                        })}

                        <button onClick={() => clearCart()}>Vaciar Carrito</button>
                        <Link to={'/checkout'}><button>Terminar Compra</button></Link>
                    </div>
                ) : (
                    <div>
                        <h2>EL CARRITO DE COMPRAS ESTÁ VACÍO</h2>
                        <Link to={'/'}><button>Volver al Inicio</button></Link>
                    </div>
                        
                    )}
            </div>
        </div>
    )

}

export default Cart