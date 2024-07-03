import { PayloadAction } from "@reduxjs/toolkit";
import { CartItem, DataState } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: DataState = {
  data: [],
  isLoading: false,
  error: "",
};

export const fetchData = createAsyncThunk("data/fetchData",() => {
    // return axios({
    //   method: "get",
    //   url: "https://private-anon-b26f96742a-pizzaapp.apiary-mock.com/restaurants/1/menu?category=Pizza&orderBy=rank",
      
    // }).then(res=>res.data)
    // .then(data=>data.map((d:CartItem)=>{
    //   return{
    //     ...d,
    //     quantity:0
    //   }
    // }));
    return fetch("https://free-food-menus-api-two.vercel.app/burgers").then(res=>res.json());
});

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchData.fulfilled,
      (state, action: PayloadAction<CartItem[]>) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default dataSlice.reducer;
