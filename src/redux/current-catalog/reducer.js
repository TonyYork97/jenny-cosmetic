import { createSlice } from "@reduxjs/toolkit";

const currentCatalogSlice = createSlice({
    name: 'currentCatalog',
    initialState: {
        currentCatalog: {}
    },
    reducers: {
        setCurrentCatalog: ((state, action) => {
            state.currentCatalog = action.payload;
        })
    }
})

export const { setCurrentCatalog } = currentCatalogSlice.actions;
export default currentCatalogSlice.reducer