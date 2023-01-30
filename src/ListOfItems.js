import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import ItemCard from "./ItemCard";
import Cart from "./Cart";
import { useSelector } from "react-redux";



export default function ListOfItems() {
    const [items, setItems] = useState([]);
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
                console.log(response.data.data.giftCardsRLD.content);
                setItems(response.data.data.giftCardsRLD.content);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "100px",
        }}>
            <ul style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
            }}>
                {items.map((item) => (
                        <ItemCard item={item} key={item.productId} style={{}}></ItemCard>
                ))}
            </ul>
        </div>
    );
}