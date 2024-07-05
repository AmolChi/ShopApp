import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { CartItem } from '@/types';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { FontAwesome6 } from '@expo/vector-icons';
import { addToCart, removeOneFromCart } from '@/context/cart/cartSlice';

const ProductDetails = () => {
    const item: CartItem | any = useLocalSearchParams();

    const cart = useAppSelector(state => state.cart.cart);
    const dispatch = useAppDispatch();
    const [contains,setContains] = useState(false);
    const [cartItem,setCartItem] = useState<CartItem|null>(null)

    useEffect(()=>{
        const index = cart.findIndex((i)=>i.id === item.id)
        if(index === -1){
            setContains(false)
        }else{
            setContains(true);
            setCartItem(cart[index]);
        }
        console.log(item)

    },[cart])

    const handlePlus = ()=>{
        dispatch(addToCart(item));
    }
    
    const handleMinus = ()=>{
        dispatch(removeOneFromCart(item))
    }

    const [error, setError] = useState(false);

    const numberFormat = (num: number) => {
        return Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR'
        }).format(num);
    }

    const handleError = () => {
        setError(true);
    }

    return (
        <View>
            <View style={{ height: '50%' }}>
                <Image source={error ? require('../assets/images/noImage.jpg') : { uri: item.img }} style={styles.image} onError={handleError} />
            </View>
            <View style={{ gap: 10 , height:'25%'}}>
                <Text style={styles.text}>
                    {item.name}
                </Text>
                <Text style={styles.text}>
                    {numberFormat(item.price)}
                </Text>
                <Text style={styles.textLow}>
                    Country: {item.country}
                    {'\n'}
                    Description: {item.dsc}
                </Text>
            </View>
            <View style={{height:'25%'}}>
                {!contains && 
                    <TouchableOpacity style={styles.button} onPress={handlePlus}>
                        <Text style={{fontSize:25,color:'#ffffff',textAlign:'center'}}>
                            Add to Cart
                        </Text>
                    </TouchableOpacity>
                }
                {contains && (
                    <View style={styles.pillBox}>
                        <TouchableOpacity onPress={handleMinus} style={{ width: '25%',alignItems:'center'}}>
                            <FontAwesome6 name='minus' color='white' />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 25, color: 'white', width: '40%', textAlign:'center' }}>
                            {
                                cartItem.quantity
                            }
                        </Text>
                        <TouchableOpacity onPress={handlePlus} style={{ width: '30%', alignItems:'center' }}>
                            <FontAwesome6 name='add' color='white' />
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    image: {
        width: 240,
        height: 240,
        borderRadius: 120,
        elevation: 30,
        borderColor: '#00000028',
        borderWidth: 1,
        margin: 'auto',

    },
    textLow:{
        textAlign:'center',
        fontSize:17,
        fontWeight:'100'
    },
    pillBox: {
        width:314,
        height: 70,
        margin:'auto',
        flexDirection: 'row',
        gap: 12, 
        alignItems: "center",
        backgroundColor: '#f25f2a',
        borderRadius: 40,
        
    },
    button:{
        backgroundColor:'#f25f2a',
        width:314,
        height:70,
        margin:'auto',
        justifyContent:'center',
        borderRadius:40
    }
})

export default ProductDetails