import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart, addToCart, removeFromCart } from "./redux/cart";

export default function Cart() {
    // The state to store the items in the cart
    // const [cartItems, setCartItems] = useState([]);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    // The function to add an item to the cart
    // const addToCart = (item) => {
    //     if (cartItems.find((cartItem) => cartItem.id === item.id)) {
    //         incrementQuantity(item);
    //     } else {
    //         setCartItems([...cartItems, item]);
    //     }
    // }

    // The function to remove an item from the cart
    // const removeFromCart = (item) => {
    //     if (item.quantity > 1) {
    //         decrementQuantity(item);
    //     } else {
    //         setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    //     }
    // }

    // The function to clear the cart
    // const clearCart = () => {
    //     setCartItems([]);
    // }

    // The function to increment the quantity of an item in the cart
    // const incrementQuantity = (item) => {
    //     setCartItems(cartItems.map((cartItem) => {
    //         if (cartItem.id === item.id) {
    //             return { ...cartItem, quantity: cartItem.quantity + 1 };
    //         } else {
    //             return cartItem;
    //         }
    //     }));
    // }

    // The function to decrement the quantity of an item in the cart
    // const decrementQuantity = (item) => {
    //     setCartItems(cartItems.map((cartItem) => {
    //         if (cartItem.id === item.id) {
    //             return { ...cartItem, quantity: cartItem.quantity - 1 };
    //         } else {
    //             return cartItem;
    //         }
    //     }));
    // }

    // useEffect(() => {
    // }, [cartItems]);

    return (
        <div className="cart">
            <h1>Cart</h1>
            <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
            <button onClick={() => dispatch(addToCart({ id: 1, name: "Item 1", price: 10, description: "This is a description of item 1", quantity: 1 }))}>Add Item 1</button>
            <button onClick={() => dispatch(addToCart({ id: 2, name: "Item 2", price: 20, quantity: 1 }))}>Add Item 2</button>
            <button onClick={() => dispatch(addToCart({ id: 3, name: "Item 3", price: 30, quantity: 1 }))}>Add Item 3</button>

            <ul>
                {
                    cartItems.map((item) => (
                        <li key={item.id}>
                            {item.name} - {item.price * item.quantity} - {item.quantity}
                            <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}