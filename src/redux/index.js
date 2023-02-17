import { configureStore } from '@reduxjs/toolkit';
import goods from './goods/reducer';
import filter from './filter/reducer';
import currentCatalog from './current-catalog/reducer';
import currentGoods from './current-goods/reducer';
import cart from './cart/reducer';
import catalog from './catalog/reducer'
export const store = configureStore({
    reducer: {
        catalog,
        goods,
        filter,
        currentCatalog,
        cart,
        currentGoods
    }
})