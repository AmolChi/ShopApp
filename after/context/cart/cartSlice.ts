import { CartItem, CartState } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:CartState = {
    cart: [],
    size: 0,
    totalCost: 0
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
        state.totalCost+= Number(state.cart[index].price);
      }else{
        state.cart.push({...action.payload,quantity:1});
        state.totalCost += Number(action.payload.price);
      }
      state.size++;
    },
    removeOneFromCart: (state, action: PayloadAction<CartItem>) => {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.totalCost -= Number(state.cart[index].price)
        if (state.cart[index].quantity === 1) {
          state.cart.splice(index, 1);
        } else {
          state.cart[index].quantity -= 1;
        }
        state.size -= 1;
      }
    },
    removeAllFromCart: (state,  action: PayloadAction<CartItem>)=>{
      const index = state.cart.findIndex(
        (item)=>item.id === action.payload.id
      );
      if(index!==-1){
        state.totalCost -= Number(state.cart[index].price) * Number(state.cart[index].quantity)
        state.cart.splice(index,1);
      }
    }
  },
});

export const { addToCart, removeOneFromCart,removeAllFromCart } = cartSlice.actions
export default cartSlice.reducer
