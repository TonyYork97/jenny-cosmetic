import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGoods = createAsyncThunk(
    'goods/fetchGoods',
    async (params) => {
        const { category, sortSelect, order, searchVal, currentPage } = params;
        const { data } = await axios.get(`https://62b3031520cad3685c993457.mockapi.io/items?page=${currentPage}&limit=9${searchVal}&${category}&${sortSelect}&order=${order}`)
        return data;
    }
)

export const fetchGoodsFiltered = createAsyncThunk(
    'goods/fetchGoodsFiltered',
    async (params) => {
        const { currentPage } = params;
        const { data } = await axios.get(`https://62b3031520cad3685c993457.mockapi.io/items?filter=${currentPage}`)
        return data;
    }
)

const goodsSlice = createSlice({
    name: 'goods',
    initialState: {
        items: [],
        status: 'loading'
    },
    reducers: {
        setItems(state, action) {
            state.items = action.payload
        }
    },
    extraReducers: {
        [fetchGoods.pending]: (state) => {
            state.status = 'loading'
            state.items = []
        },
        [fetchGoods.fulfilled]: (state, action) => {
            state.items = action.payload
            state.status = 'success'
        },
        [fetchGoods.rejected]: (state) => {
            state.status = 'error'
            state.items = []
        },
        [fetchGoodsFiltered.pending]: (state) => {
            state.status = 'loading'
            state.items = []
        },
        [fetchGoodsFiltered.fulfilled]: (state, action) => {
            state.items = action.payload
            state.status = 'success'
        },
        [fetchGoodsFiltered.rejected]: (state) => {
            state.status = 'error'
            state.items = []
        }
    }
})

export const { setItems } = goodsSlice.actions;
export default goodsSlice.reducer;