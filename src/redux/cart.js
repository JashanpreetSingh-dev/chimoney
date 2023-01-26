import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
            if (state.cartItems.find((cartItem) => cartItem.id === action.payload.id)) {
                state.cartItems.map(item =>{
                    if (item.id === action.payload.id) {
                        item.quantity += 1;
                    } else {
                        return item;
                    }
                })
            } else {
                state.cartItems.push(action.payload);
            }
        },
        removeFromCart: (state, action) => {
            if (action.payload.quantity > 1) {
                state.cartItems.map(item => {
                    if (item.id === action.payload.id) {
                        item.quantity -= 1;
                    } else {
                        return item;
                    }
                })
            } else {
                state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id);
            }
        },
        clearCart: (state) => {
            state.cartItems = [];
        },
        incrementByAmount: (state, action) => {
            state.cartItems.map((cartItem) => {
                if (cartItem.id === action.payload.id) {
                    return { ...cartItem, quantity: cartItem.quantity + 1 };
                } else {
                    return cartItem;
                }
            });
        }
    }
});

export const { addToCart, removeFromCart, clearCart, incrementByAmount } = cartSlice.actions;

export default cartSlice.reducer;