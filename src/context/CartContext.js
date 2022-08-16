import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) =>{
    const [cartProducts, setCartProducts] = useState ([])
    const [totalProducts, setTotalProducts] = useState (0)

    const addProductToCart = (product) =>{
        let isInCart = cartProducts.find(cartItem => cartItem.id === product.id)
        if(!isInCart){
            setTotalProducts(totalProducts + 1)
            return setCartProducts(cartProducts =>[...cartProducts, product])
        }
    }

    const removeFromCart = (id) => {
       const newCart = cartProducts.filter((product) => product.id !== id)
       setCartProducts(newCart);
    }

    const clearCart = () => {setCartProducts([])}

    const data = {
        cartProducts,
        setCartProducts,
        addProductToCart,
        removeFromCart,
        clearCart,
        totalProducts,
    }
    
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

export {CartContext}