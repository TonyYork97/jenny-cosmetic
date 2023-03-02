import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    totalPrice: 0,
    favorites: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const hasItem = state.cartItems.find(
        (obj) => obj.id === action.payload.id
      )
      if (hasItem) {
        hasItem.count++
      } else {
        state.cartItems.push({
          ...action.payload,
          count: 1,
        })
      }
      state.totalPrice = state.cartItems.reduce((sum, obj) => {
        return obj.price * obj.count + sum
      }, 0)
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      )
      state.totalPrice = state.cartItems.reduce((sum, obj) => {
        return obj.price * obj.count + sum
      }, 0)
    },
    minusClick: (state, action) => {
      const item = state.cartItems.find((obj) => obj.id === action.payload)
      if (item.count <= 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        )
      } else {
        item.count--
      }
      state.totalPrice = state.cartItems.reduce((sum, obj) => {
        return obj.price * obj.count + sum
      }, 0)
    },
    addToFavorites: (state, action) => {
      const hasItem = state.favorites.find(
        (obj) => obj.id === action.payload.id
      )
      if (hasItem) {
        state.favorites = state.favorites.filter(
          (item) => item.id !== action.payload.id
        )
      } else {
        state.favorites.push({
          ...action.payload,
        })
      }
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload
      )
    },
    clearCart: (state) => {
      state.cartItems = []
      state.totalPrice = 0
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  setTotalPrice,
  minusClick,
  addToFavorites,
  removeFromFavorites,
  clearCart,
} = cartSlice.actions
export default cartSlice.reducer
