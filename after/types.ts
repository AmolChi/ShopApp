export type CartItem = {
    id: number,
    img: string,
    name: string,
    dsc: string,
    price: number,
    rate: string,
    country: string
    quantity:number
}

export type CartState = {
  cart: CartItem[];
  size: number;
  totalCost: number
}

export type DataState = {
    data : CartItem[],
    isLoading : boolean,
    error: string
}