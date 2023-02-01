import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "./redux/cart";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from "@mui/material/Button";

export default function ItemPage() {

    const item = useSelector((state) => state.itemPage.item);
    const dispatch = useDispatch();

    return (
        <div id="itemPage" style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "100px",
        }}>
            <div className="item-page-title" style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "30px",
                paddingBottom: "20px",
            }}>
                {item.productName}
            </div>
            <div className="item-page-image" style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: "20px",
            }}>
                <img src={item.img} alt="Company Logo" style={{
                    width: "400px",
                    objectFit: "contain",
                }}></img>
            </div>
            <div className="item-page-description" style={{}}>
                {item.description}
            </div>
            <div className="item-page-redeemInstructions" style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: "20px",
            }}>
            </div>
            <div className="item-page-button" style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Button onClick={
                    () => {
                        try{
                            dispatch(addToCart(item))
                            window.location.href = "/cart"
                        }
                        catch(err){
                            console.log(err)
                        }
                    
                    }
                } 
                variant={"contained"} endIcon={<ShoppingCartIcon />}
                    style={{
                        backgroundColor: "#660a78",
                    }}>
                    Add to Cart
                </Button>
            </div>
        </div>
    )
}