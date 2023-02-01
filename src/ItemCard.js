import React from "react";
import Button from "@mui/material/Button";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/cart";
import { Link } from "react-router-dom";
import { setItem } from "./redux/itemPage";
import { useSelector } from "react-redux";

export default function ItemCard(props) {
    const dispatch = useDispatch();

    const AddedItems = useSelector((state) => state.cart.cartItems);

    const isAdded = AddedItems.find((item) => item.productId === props.item.productId);

    const getAddedCartItemQuantity = (item) => {
        const addedItem = AddedItems.find((addedItem) => addedItem.productId === item.productId);
        if (addedItem) {
            return addedItem.quantity.toString();
        } else {
            return 0;
        }
    };

    return (
        <div className="item-card" style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            margin: "10px",
            width: "300px",
            height: "275px",
            backgroundColor: "white",
            borderRadius: "10px",
        }}>
            <Link to={`product/${props.item.productId}`} onClick={
                () => dispatch(setItem(props.item))
            } style={{
                textDecoration: "none",
                color: "black",
            }}>
                <div className="inner-item-card">
                    <div className="item-card-image" style={{
                        width: "100%",
                        height: "100px",
                        display: "flex",
                    }}>
                        <img src={props.item.img} alt="Company Logo" style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",


                        }}></img>
                    </div>
                    <div className="item-card-name" style={{
                        fontWeight: "bold",
                        fontSize: "15px",
                        padding: "20px",
                        fontFamily: "Monospace",
                        textAlign: "center",
                    }}>{props.item.name}</div>
                </div>
            </Link>


            <div className="item-card-btn" style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10px",
                marginBottom: "0",
            }}>
                <Button variant="contained" endIcon={
                    isAdded ? <CheckCircleIcon /> : <ShoppingCartIcon />
                } onClick={
                    () => { dispatch(addToCart(props.item)) }
                } style={
                    isAdded ? {
                        backgroundColor: "green",
                        color: "white",
                        width: "100%",
                    } : {
                        backgroundColor: "#660a78",
                        color: "white",
                        width: "100%",
                    }
                } >
                    {isAdded ? "Added - " + getAddedCartItemQuantity(props.item) : "Add to Cart"}
                </Button>
            </div>

        </div>
    )
}