import {createSlice} from '@reduxjs/toolkit';
import {allowedLanguages} from '../../languageSupport/allowedLanguages';

const initialState = {
  item: [],
  quantity:0,
  total:0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const {item} = action.payload;
      state.item = [...state.item,item];
      state.quantity +=state.quantity ;
      state.total =state.total + item.price
    },
  },
});

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;
