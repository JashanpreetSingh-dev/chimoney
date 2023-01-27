import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import ItemCard from "./ItemCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setItem } from "./redux/itemPage";
import Cart from "./Cart";

export default function ListOfItems() {
    const [items, setItems] = useState([]);
    const dispatch = useDispatch();

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