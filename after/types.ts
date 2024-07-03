export type CartItem = {
    id: number,
    img: string,
    name: string,
    dsc: string,
    price: string,
    rate: string,
    country: string
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