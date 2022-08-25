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
                                            <p>{product.title}</p>
                                            <p>${product.price}</p>
                                            <button onClick={() => removeFromCart (product.id)}>X</button>
                                        </div>
                                    </div>
                                </>
                                
                                
                            )
                        })}

                        <button onClick={() => clearCart()}>Vaciar Carrito</button>
                    </div>
                ) : (
                    <div>
                        <h2>EL CARRITO DE COMPRAS ESTÁ VACÍO</h2>
                        <Link to={'/'}><button>Volver al Inicio</button></Link>
                    </div>
                        
                    )}
            </div>

            {cartProducts.length >=1 ? (
                <>
                    <h2>Formulario de Compra</h2>

                    <form onSubmit={submitData}>
                        <input 
                            type='text' 
                            name='name' 
                            placeholder='Nombre' 
                            value={formData.name} 
                            onChange={handleChange}
                        />

                        <input 
                            type='number' 
                            name='phone' 
                            placeholder='Ingrese su Teléfono'
                            value={formData.phone}
                            onChange={handleChange}
                        />

                        <input 
                            type='email' 
                            name='email' 
                            placeholder='Ingrese su direccion de Email'
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <button type='submit'>Enviar</button>
                    </form>

                    {/* <Link to={'/checkout'}><button>Terminar Compra</button></Link> */}

                    {orderId ? (
                        <>
                            <h3>Su orden se generó correctamente</h3>
                            <p>El numero de ID de su compra es: {orderId} </p>
                        </>
                        
                    ): ("")}
                </>
            ):("")}
            
            
        </div>
    )

}

export default Cart