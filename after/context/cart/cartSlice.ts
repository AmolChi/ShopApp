import { CartItem, CartState } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:CartState = {
    cart: [],
    size: 0
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const index = state.cart.findIndex(
        (item)=> item.id === action.payload.id
      )
      if(index!=-1){
        state.cart[index].quantity+=1;
      }else{
        state.cart.push({...action.payload,quantity:1});
      }
      state.size++;
    },
    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        if (state.cart[index].quantity === 1) {
          state.cart.splice(index, 1);
        } else {
          state.cart[index].quantity -= 1;
        }
        state.size -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
