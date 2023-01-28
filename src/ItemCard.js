import React from "react";
import Button from "@mui/material/Button";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/cart";
import { Link } from "react-router-dom";

export default function ItemCard(props) {
    const dispatch = useDispatch();
    return (
        <div className="item-card" style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            margin: "10px",
            width: "300px",
            height: "350px",
            backgroundColor: "white",
            borderRadius: "10px",
        }}>
            <Link to={`product/${props.item.id}`} style={{
                textDecoration: "none",
                color: "black",
            }}>
                <div className="inner-item-card">
                    <div className="item-card-image" style={{
                        width: "100%",
                        height: "100px",
                        display: "flex",
                    }}>
                        <img src={props.item.images[0]} alt="Company Logo" style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",


                        }}></img>
                    </div>
                    <div className="item-card-name" style={{
                        fontWeight: "bold",
                        fontSize: "20px",
                        padding: "10px",
                        fontFamily: "Monospace",
                    }}>{props.item.name}</div>
                    <div className="item-card-description" style={{
                        fontSize: "12px",
                        textAlign: "left",
                        padding: "10px",
                        fontFamily: "Monospace",
                    }}>
                        It is a long established fact that a reader will be distracted by the readable content of
                        a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                        more-or-less normal distribution of letters.
                    </div>
                    <div className="item-card-price" style={{
                        fontWeight: "bold",
                        fontSize: "25px",
                        fontFamily: "Monospace",
                        padding: "10px",
                    }}>${props.item.price}
                    </div>
                </div>
            </Link>


            <div className="item-card-btn" style={{
                width: "100%",
            }}>
                <Button variant="contained" endIcon={<ShoppingCartIcon />} onClick={
                    () => { dispatch(addToCart(props.item)) }
                } style={{
                    backgroundColor: "#660a78",
                    width: "100%",
                }}>
                    Quick Add
                </Button>
            </div>

        </div>
    )
}