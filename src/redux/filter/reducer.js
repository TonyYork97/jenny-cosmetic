import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        categories: 'все товары',
        sortBy: 'id',
        currentPage: 1
    },
    reducers: {
        setCategory: (state, action) => {
            state.categories = action.payload
        },
        setSort: (state, action) => {
            state.sortBy = action.payload
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        setFilters: (state, action) => {
            state.currentPage = Number(action.payload.currentPage)
            state.sortBy = action.payload.sortBy
            state.categories = action.payload.categories
        }
    }
})

export const { setCategory, setSort, setCurrentPage, setFilters } = filterSlice.actions;
export default filterSlice.reducer