import {createSlice} from '@reduxjs/toolkit';

export const itemPageSlice = createSlice({
    name: 'itemPage',
    initialState: {
        item: {},
    },
    reducers: {
        setItem: (state, action) => {
            state.item = action.payload;
        },
        clearItem: (state) => {
            state.item = {};
        }
    }
});

export const {setItem, clearItem} = itemPageSlice.actions;

export default itemPageSlice.reducer;