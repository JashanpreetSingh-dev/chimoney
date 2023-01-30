import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "./redux/cart";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from "@mui/material/Button";

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
                <Button onClick={() => dispatch(addToCart(item))} variant={"contained"} endIcon={<ShoppingCartIcon />}
                    style={{
                        backgroundColor: "#660a78",
                    }}>
                    Add to Cart
                </Button>
            </div>
        </div>
    )
}