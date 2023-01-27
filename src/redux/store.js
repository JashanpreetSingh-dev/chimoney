import {configureStore} from '@reduxjs/toolkit';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {combineReducers} from '@reduxjs/toolkit';
import cartReducer from './cart';
import itemPageReducer from './itemPage';

const persistConfig = {
    key: 'root',
    storage: storage,
};

const rootReducer = combineReducers({
    cart: cartReducer,
    itemPage: itemPageReducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [...getDefaultMiddleware()],
});

const persistor = persistStore(store);

export {store, persistor};

// export default configureStore({
//     reducer: {
//         cart: cartReducer,
//         itemPage: itemPageReducer,
//     }
// });