import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart, removeFromCart } from "./redux/cart";
import { Button } from "@mui/material";
import ItemCounter from "./ItemCounter";

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
export default function Cart() {

    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalItemsInCart = useSelector((state) => state.cart.quantity);
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

        <div className="cart" style={{
            paddingTop: "100px",

        }}>
            <ul style={{
                listStyle: "none",
                padding: "0",
                margin: "0",
                paddingBottom: "100px",
            }}>
                {
                    cartItems.map((item) => (
                        <li key={item.productId} style={{
                            listStyle: "none",
                            marginBottom: "20px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",


                        }} >
                            <div className="cart-item"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "10px",
                                    border: "1px solid #ccc",
                                    borderRadius: "5px",
                                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
                                    marginBottom: "10px",
                                    width: "80%",
                                    boxSizing: "border-box",
                                    transition: "all 0.3s ease-out",
                                    backgroundColor: "white",
                                    color: "black",
                                }}>
                                <div className="cart-item-img"
                                    style={{
                                        width: "20%",
                                        height: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        cursor: "pointer",
                                    }} 
                                    onClick={() =>{
                                            window.location.href = "/product/" + item.productId
                                        }}>
                                    <img src={item.img} alt={item.name} style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "contain",
                                    }} />
                                </div>
                                <div className="cart-item-info"
                                    style={{
                                        width: "70%",
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "flex-start",
                                        padding: "0 10px",
                                    }}>

                                    <div className="cart-item-info-inner" style={{
                                        width: "100%",
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "flex-start",
                                        overflow: "hidden",
                                    }}>
                                        <h3 style={{
                                            fontSize: "1.2rem",
                                            fontWeight: "400",
                                            margin: "0",
                                            fontFamily: "Monospace",
                                        }}><b>{item.name}</b></h3>
                                        <p style={{
                                            fontSize: "1rem",
                                            fontWeight: "300",
                                            margin: "0",
                                            fontFamily: "Monospace",
                                            padding: "5px 0",
                                        }}>{item.description}</p>
                                        <ItemCounter itemId={item.productId}></ItemCounter>
                                    </div>

                                    <div className="cart-item-actions">
                                        <button style={{ 
                                            backgroundColor: "transparent", 
                                            border: "none", 
                                            cursor: "pointer",
                                        }}
                                            onClick={() => dispatch(removeFromCart(item))}><DeleteForeverIcon /></button>
                                    </div>


                                </div>
                            </div>
                            {/* <Card sx={{ maxWidth: "70%", margin: "auto" }}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",

                                }}>
                                <div className="cart-item-inner" style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "left",

                                }}>
                                    <div className="card-item-img" style={{
                                        width: "20%",
                                        height: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}>
                                        <CardMedia
                                            image={item.img}
                                            title={item.name}
                                            style={{
                                                height: 0,
                                                padding: "56.25% 0 0 0",
                                                width: "100%",


                                            }}
                                        ></CardMedia>
                                    </div>
                                    <div className="cart-item-info" style={{
                                        width: "70%",
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "left",
                                        alignItems: "left",
                                    }}>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {item.name}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" onClick={() => dispatch(removeFromCart(item))}>Remove</Button>
                                        </CardActions>
                                    </div>
                                </div>


                            </Card> */}
                        </li>
                    ))
                }
            </ul>

            <div className="cart-total" style={{
                zIndex: "100",
                position: "fixed",
                bottom: "0",
                padding: "10px",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#660a78",

            }}>
                {/* <h3 style={{}}>Total: ${cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}</h3> */}
                <p style={{
                    color: "white",
                    fontSize: "1.2rem",
                    fontWeight: "400",
                    margin: "0",
                    paddingBottom: "10px",
                    fontFamily: "Monospace",
                }}>
                    Total Items: {totalItemsInCart}
                </p>
                <Button variant="contained" style={{
                    backgroundColor: "yellow",
                    color: "black",
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "all 0.3s ease-out",
                }} onClick={
                    () => {
                        {
                            if (totalItemsInCart === 0) {
                                alert("Please add items to cart")
                            } else {
                                window.location.href = "/checkout"
                            }
                        }
                    }
                }>
                    <b>Checkout</b>
                </Button>
            </div>

        </div>
    )
}