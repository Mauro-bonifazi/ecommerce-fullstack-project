import React, { createContext, useContext, useState } from "react";
const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Array de productos global
  const [noStockAlert, setNoStockAlert] = useState(false); // Nuevo estado para manejar la alerta

  const addToCart = (product, quantity = 1) => {
    //nos fijamos si ya no existe el item en el carrito
    const existingCartItem = cart.find(
      (cartItem) => cartItem.product._id === product._id
    );
    // Item esta en el carrito;
    if (existingCartItem) {
      if (existingCartItem.quantity < product.stock) {
        const updatedCart = cart.map((cartItem) => {
          if (cartItem.product._id === product._id) {
            return { ...cartItem, quantity: cartItem.quantity + 1 }; // inmutables
          }
          return cartItem;
        });
        setCart(updatedCart);
      } else {
        setNoStockAlert(true); // Mostrar alerta cuando no haya stock
      }
    } else {
      // Item no está en el carrito;
      if (product.stock > 0) {
        setCart([...cart, { product, quantity: 1 }]);
      } else {
        setNoStockAlert(true); // Mostrar alerta cuando no haya stock
      }
    }
  };

  const removeFromCart = (item) => {
    // Lógica para remover un item del carrito
    const updatedCart = cart.filter(
      (cartItem) => cartItem.product._id !== item.product._id
    );
    setCart(updatedCart);
  };
  //logica para el boton comprar (agregar un producto AL CARRITO)
  const shoopCart = (product, quantity = 1) => {
    // Verifica si el producto ya existe en el carrito
    const existingCartItem = cart.find(
      (cartItem) => cartItem.product._id === product._id
    );

    // Si el producto ya existe en el carrito, no lo incrementa desde el botón
    if (existingCartItem) {
      return;
    }

    // Si el producto no existe en el carrito y hay stock, lo agrega
    if (product.stock > 0) {
      setCart([...cart, { product, quantity: 1 }]);
    } else {
    }
  };

  //logica para restar un item del carrito
  const decreaseQuantity = (product, decrement = 1) => {
    const updatedCart = cart
      .map((cartItem) => {
        if (cartItem.product._id === product._id) {
          return { ...cartItem, quantity: cartItem.quantity - decrement };
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.quantity > 0); // Elimina items con cantidad 0
    setCart(updatedCart);
  };
  // Funcion para formatear el precio de los productos
  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-ES", {}).format(price);
  };

  const resetCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        resetCart,
        noStockAlert,
        setNoStockAlert,
        decreaseQuantity,
        formatPrice,
        shoopCart,
      }} // Compartimos el estado de alerta
    >
      {children}
    </CartContext.Provider>
  );
};
