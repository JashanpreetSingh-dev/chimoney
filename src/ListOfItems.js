import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import ItemCard from "./ItemCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setItem } from "./redux/itemPage";
import Cart from "./Cart";

import { useSelector } from "react-redux";

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ListOfItems() {
    const [items, setItems] = useState([]);
    const dispatch = useDispatch();

    const quantity = useSelector((state) => state.cart.quantity);
    console.log("Quantity-----------------" + quantity);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://api.chimoney.io/v0.2/info/assets',
            params: { countryCode: 'NG' },
            headers: {
                accept: 'application/json',
                'X-API-KEY': '5fa47041cf1bca32b11f72a3bac177bcbec210479c06821401b5e3501ca7e262'
            }
        };

        axios
            .request(options)
            .then(function (response) {
                console.log(response.data.data.benefitsList.slice(17, 34));
                setItems(response.data.data.benefitsList.slice(17, 34));
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <Cart></Cart>

            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
                width: "99%",
                height: "99px",
                backgroundColor: "white",
            }}>
                <IconButton aria-label="cart">
                    <Badge badgeContent={quantity} color="error">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
            </div>

            <h1>Items</h1>
            <ul style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
            }}>
                {items.map((item) => (
                    <Link to={`/product/${item.id}`} key={item.id} onClick={
                        () => {
                            dispatch(setItem(item));
                        }
                    }>
                        <ItemCard item={item} key={item.id} style={{}}></ItemCard>
                    </Link>

                ))}
            </ul>
        </div>
    );
}