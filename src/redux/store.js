import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cart';
import itemPageReducer from './itemPage';
export default configureStore({
    reducer: {
        cart: cartReducer,
        itemPage: itemPageReducer,
    }
});