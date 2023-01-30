import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        quantity: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existItem = state.cartItems.find((cartItem) => cartItem.productId === item.productId);
            if (existItem) {
                existItem.quantity += 1;
                state.quantity += 1;
            } else {
                state.cartItems.push({ ...item, quantity: 1 });
                state.quantity += 1;
            }
        },
        removeFromCart: (state, action) => {
            // if (action.payload.quantity > 1) {
            //     state.cartItems.map(item => {
            //         if (item.productId === action.payload.productId) {
            //             item.quantity -= 1;
            //             state.quantity -= 1;
            //         } else {
            //             return item;
            //         }
            //         return;
            //     })
            // } else {
            //     // state.quantity -= 1;
            //     state.cartItems = state.cartItems.filter((cartItem) => cartItem.productId !== action.payload.productId);
            //     state.quantity
            // }
            state.cartItems = state.cartItems.filter((cartItem) => cartItem.productId !== action.payload.productId);
            state.quantity -= action.payload.quantity;
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.quantity = 0;
        },
        increment: (state, action) => {
            const item = action.payload;
            const existItem = state.cartItems.find((cartItem) => cartItem.productId === item.productId);
            if (existItem) {
                existItem.quantity += 1;
            }
            state.quantity += 1;
        },
        decrement: (state, action) => {
            const item = action.payload;
            const existItem = state.cartItems.find((cartItem) => cartItem.productId === item.productId);
            if (existItem.quantity > 1) {
                existItem.quantity -= 1;
            } else if (existItem.quantity === 1) {
                state.cartItems = state.cartItems.filter((cartItem) => cartItem.productId !== action.payload.productId);
            }
            state.quantity -= 1;
        },
        setQuantity: (state, action) => {
            state.quantity = action.payload;
        }
    }
});

export const { addToCart, removeFromCart, clearCart, increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;