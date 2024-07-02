export type CartItem = {
  category:string,
  id:number,
  name:string,
  price:number,
  rank:number,
  topping:string[]|null,
  quantity:number
}

export type CartState = {
  cart: CartItem[];
  size: number;
}

export type DataState = {
    data : CartItem[],
    isLoading : boolean,
    error: string
}