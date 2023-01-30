import React from "react";
import { useState, useEffect } from "react";
import { increment, decrement, clearCart } from "./redux/cart";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ItemCounter({itemId}) {
    const dispatch = useDispatch();
    const CartItems = useSelector((state) => state.cart.cartItems);
    const item = CartItems.find((cartItem) => cartItem.productId === itemId);
    console.log("ItemCounter" + itemId);
    console.log(item.quantity);
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: "30px",
            backgroundColor: "white",
            padding: "10px 0",
        }}>
            <button style={{
                width: "30px",
                height: "30px",
                backgroundColor: "green",
                border: "none",
                borderRadius: "5px",
                fontSize: "20px",
                fontWeight: "bold",
            }} onClick={() => {
                dispatch(increment(item));
                // console.log(item);
            }}
             >+</button>
             <label style={{
                width: "30px",
                height: "30px",
                padding: "0 10px",
                fontSize: "20px",
                fontWeight: "bold",
                textAlign: "center",

             }}>{item.quantity}</label>

             {item.quantity === 1 ? 
             <button style={{
                border: "none",
                backgroundColor: "red",
                textAlign: "center",
                height: "30px",
                width: "30px",
                borderRadius: "5px",

             }} onClick={() => {
                dispatch(decrement(item));
             }}><DeleteIcon style={{
                height: "20px",
                width: "20px",
             }}/></button> 
             : 
             <button style={{
                width: "30px",
                height: "30px",
                backgroundColor: "red",
                border: "none",
                borderRadius: "5px",
                fontSize: "20px",
                fontWeight: "bold",
             }} onClick={() => {
                dispatch(decrement(item));
             }}>-</button>}
        </div>
    )
}