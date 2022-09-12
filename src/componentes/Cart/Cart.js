import './Cart.scss';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import db from '../../firebaseConfig.js'
import { collection, addDoc } from 'firebase/firestore';
import { async } from '@firebase/util';
import Checkout from '../../paginas/checkout/checkout';

const Cart = () => {

    const { cartProducts, removeFromCart, clearCart, totalPrice } = useContext(CartContext)
    const [orderId, setOrderID] = useState()

    const [order, setOrder] = useState({
        items: cartProducts.map((product) => {
            return{
                id: product.id,
                title: product.title,
                price: product.price
            }
        }),
        buyer: {},
        total: totalPrice,
    })

    const [formData, setFormData] = useState ({
        name: '',
        phone:'',
        email:'',
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    
    const submitData = (e) =>{
        e.preventDefault()
        pushData({...order, buyer: formData})
    }

    const pushData = async (newOrder) =>{
        const collectionOrder = collection (db, 'orders')
        const orderDoc = await addDoc (collectionOrder, newOrder)
        setOrderID (orderDoc.id)
    }
    
    return(
        <div>
            <h1>CARRITO DE COMPRAS</h1>
            <div>
                {cartProducts.length > 0 ? (
                    <div>
                        {cartProducts.map((product) => {
                            return(
                                <>
                                    <div >
                                        <div class="divCart" key="product.id">
                                            <img src={`../recursos/${product.imagen}`} alt={`tokyo`} />
                                            <p class="productT">{product.title}</p>
                                            <p class="productT">${product.price}</p>
                                            <button class="xButton" onClick={() => removeFromCart (product.id)}>X</button>
                                        </div>
                                    </div>
                                </>
                                
                                
                            )
                        })}

                        <button class="vCart" onClick={() => clearCart()}>Vaciar Carrito</button>
                    </div>
                ) : (
                    <div>
                        <h2 class="cartVacio">EL CARRITO DE COMPRAS ESTÁ VACÍO</h2>
                        <Link to={'/'}><button class="vCart">Volver al Inicio</button></Link>
                    </div>
                        
                    )}
            </div>

            {cartProducts.length >=1 ? (
                <>
                    <h2>Formulario de Compra</h2>

                    <form class="form" onSubmit={submitData}>
                        <p class="productT">Ingrese Su Nombre:</p>
                        <input 
                            type='text' 
                            name='name' 
                            placeholder='Kevin' 
                            value={formData.name} 
                            onChange={handleChange}
                        />

                        <p class="productT">Ingrese Número de Teléfono:</p>
                        <input 
                            type='number' 
                            name='phone' 
                            placeholder='1123546879'
                            value={formData.phone}
                            onChange={handleChange}
                        />

                        <p class="productT">Ingrese Su Email:</p>
                        <input 
                            type='email' 
                            name='email' 
                            placeholder='email@email.com'
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <button type='submit' class="vCart">Enviar</button>
                    </form>

                    {/* <Link to={'/checkout'}><button>Terminar Compra</button></Link> */}

                    {orderId ? (
                        <>
                            <h2>Su orden se generó correctamente</h2>
                            <p class="productT">El numero de ID de su compra es: {orderId} </p>
                        </>
                        
                    ): ("")}
                </>
            ):("")}
            
            
        </div>
    )

}

export default Cart