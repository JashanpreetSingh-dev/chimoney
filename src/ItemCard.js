import React from "react";
import { useState, useEffect } from "react";

export default function ItemCard(props) {
    return (
        <div className="item-card" style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid black",
            padding: "10px",
            margin: "10px",
            width: "300px",
            height: "300px",
        }}>
            <div className="item-card-image" style={{
                width: "100px",
                height: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
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
            }}>{props.item.name}</div>
            <div className="item-card-price" style={{
                fontWeight: "bold",
                fontSize: "20px",
                padding: "10px",
            }}>{props.item.price}</div>
            <div className="item-card-description" style={{
                fontSize: "12px",
                textAlign: "center",
            }}>
                It is a long established fact that a reader will be distracted by the readable content of
                a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters.
            </div>
            {/* <div className="item-card-button" style={{}}>
                <button style={{}}>Add to Cart</button>
            </div> */}
        </div>
    )
}