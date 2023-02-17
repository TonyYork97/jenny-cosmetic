import { createSlice } from "@reduxjs/toolkit";

const currentGoodsSlice = createSlice({
    name: 'currentGoods',
    initialState: {
        currentGoods: []
    },
    reducers: {
        setCurrentGoods: ((state, action) => {
            state.currentGoods = action.payload;
        })
    }
})

export const { setCurrentGoods } = currentGoodsSlice.actions;
export default currentGoodsSlice.reducer