import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import catalogJSON from '../../components/catalog.json';

export const fetchCatalog = createAsyncThunk(
    'catalog/fetchCatalog',
    async () => {
        const { data } = await axios.get(`https://62b3031520cad3685c993457.mockapi.io/catalog`)
        return data;
    }
)


const catalogSlice = createSlice({
    name: 'catalog',
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
        [fetchCatalog.pending]: (state) => {
            state.status = 'loading'
            state.items = []
        },
        [fetchCatalog.fulfilled]: (state, action) => {
            state.items = action.payload
            state.status = 'success'
        },
        [fetchCatalog.rejected]: (state) => {
            state.status = 'error'
            state.items = []
        },
    }
})

export const { setItems } = catalogSlice.actions;
export default catalogSlice.reducer;