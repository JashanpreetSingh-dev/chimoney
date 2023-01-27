import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "./redux/cart";

export default function ItemPage() {

    // const param = useParams();
    // const itemID = param.id;

    // const [item, setItem] = useState([]);
    const item = useSelector((state) => state.itemPage.item);
    console.log("-------------ITEM-------------");
    console.log(item);
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cartItems);
    console.log("-------------CART-------------");
    console.log(cart);
    // console.log(itemPage);

    // useEffect(() => {}, [itemPage]);

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
        <div id="itemPage" style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <h1 style={{
                textAlign: "center",
            }}>{item.name}</h1>

            <div className="item-page-image" style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <img src={item.images[0]} alt="Company Logo" style={{}}></img>
            </div>
            <div className="item-page-price" style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}>
                {item.price}
            </div>
            {/* <div className="item-page-description" style={{}}>
                {item.description}
            </div> */}
            <div className="item-page-button" style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}>
            <div className="item-page-button" style={{}}>
                <button onClick={
                    () => {
                        dispatch(addToCart(item))
                    }
                }>Buy</button>
            </div>
            <div className="item-page-variants" style={{}}>
                <select>
                    {item.variants.map((variant) =>{
                        return <option value={variant.id}>{variant.name}</option>
                    })}
                </select>
            </div>
            <div className="item-page-sizes" style={{}}>
                <select>
                    {item.sizes.map((size) =>{
                        return <option value={size}>{size}</option>
                    })}
                </select>
            </div>

            </div>
        </div>
    )
}