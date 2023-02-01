import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "./redux/cart";
import { Button } from "@mui/material";
import ItemCounter from "./ItemCounter";

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
export default function Cart() {

    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalItemsInCart = useSelector((state) => state.cart.quantity);
    const dispatch = useDispatch();

    return (

        <div className="cart" style={{
            paddingTop: "100px",

        }}>
            <div className="ContinueShopping" style={{
                justifyContent: "left",
                alignItems: "left",
                marginBottom: "20px",
            }}>
                <Button variant="text" style={{
                    color: "black",
                    textShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
                    fontSize: "0.9rem",
                }} onClick={() => {
                    window.location.href = "/";
                }}>Continue Shopping</Button>
            </div>
            <div className="cart-header" style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "20px",
            }}>
                <h1 style={{
                    textAlign: "center",
                    fontSize: "2rem",
                    fontWeight: "bold",
                    color: "black",
                    textShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
                }}>
                    Cart
                </h1>
            </div>
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