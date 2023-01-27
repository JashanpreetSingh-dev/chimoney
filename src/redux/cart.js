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
            const existItem = state.cartItems.find((cartItem) => cartItem.id === item.id);
            if (existItem) {
                existItem.quantity += 1;
            } else {
                state.cartItems.push({ ...item, quantity: 1 });
                state.quantity += 1;
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
                state.quantity -= 1;
                state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id);
            }
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.quantity = 0;
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