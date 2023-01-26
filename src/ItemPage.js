import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function ItemPage() {

    // const param = useParams();
    // const itemID = param.id;

    // const [item, setItem] = useState([]);
    const {item} = useSelector((state) => state.itemPage);
    console.log(item);

    // useEffect(() => {
    //     const options = {
    //         method: 'GET',
    //         url: 'https://api.chimoney.io/v0.2/info/assets',
    //         params: { countryCode: 'NG' },
    //         headers: {
    //             accept: 'application/json',
    //             'X-API-KEY': '5fa47041cf1bca32b11f72a3bac177bcbec210479c06821401b5e3501ca7e262'
    //         }
    //     };

    //     axios
    //         .request(options)
    //         .then(function (response) {
    //             var item = response.data.data.benefitsList.slice(17,34).filter(function (item){return item.id == itemID})
    //             console.log(item[0]);
    //             setItem(item[0]);
    //         })
    //         .catch(function (error) {
    //             console.error(error);
    //         });
    // }, []);



    return (
        <div id="itemPage">
            <h1>{item.name}</h1>
            <div className="item-page-image" style={{}}>
                {/* <img src={item.images[0]} alt="Company Logo" style={{}}></img> */}
            </div>
            <div className="item-page-price" style={{}}>
                {item.price}
            </div>
            {/* <div className="item-page-description" style={{}}>
                {item.description}
            </div> */}
            <div className="item-page-button" style={{}}>
                <button>Buy</button>
            </div>
        </div>
    )
}