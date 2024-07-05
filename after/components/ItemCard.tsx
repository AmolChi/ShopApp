import { View, Text, Button, StyleSheet, Pressable, Image, TouchableOpacity  } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link } from 'expo-router'
import { TabBarIcon } from './navigation/TabBarIcon'
import { useAppDispatch } from '@/hooks/reduxHooks'
import { addToCart, removeOneFromCart } from '@/context/cart/cartSlice'
import { Colors } from '@/constants/Colors'
import {} from 'react-native-gesture-handler'
import { CartItem } from '@/types'


const ItemCard = ({ pizza }: CartItem|any) => {
    const dispatch = useAppDispatch();
    const handleAddButton = () => {
        dispatch(addToCart(pizza));
    }

    const handleRemoveButton = ()=>{
        dispatch(removeOneFromCart(pizza));
    }


    const [error,setError] = useState(false);

    const handleError = ()=>{
        setError(true);
    }

    return (
        <Link href={{
            pathname:'/ProductDetails',
            params:{...pizza,
            }
        }} asChild>
            <Pressable style={styles.card} key={pizza.id}>
                <Image source={error?require('../assets/images/noImage.jpg'):{uri:pizza.img}} style={styles.image} onError={handleError} />
                <Text style={{ fontSize: 20 }}>{pizza.name}</Text>
                <TouchableOpacity onPress={handleAddButton}>
                    <TabBarIcon name='add-circle' color={Colors.light.tabIconDefault} />
                </TouchableOpacity>
            </Pressable>
        </Link>
    )
}

const styles = StyleSheet.create({
    card: {
        aspectRatio:1,
        flex:0.35,
        alignItems:'center',
        width:190,
        minHeight:250,
        borderRadius:30,
        top:40,
        backgroundColor:'#FFFFFF',
        shadowColor: '#f5bf9a',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation:20
    },
    image:{
       width:120,
       height:120,
       borderRadius:50,
       bottom:50,
       elevation:30,
       borderColor:'#00000028',
       borderWidth:1
    }
})

export default ItemCard
