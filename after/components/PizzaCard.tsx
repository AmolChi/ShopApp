import { View, Text, Button, StyleSheet, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { Link } from 'expo-router'
import { TabBarIcon } from './navigation/TabBarIcon'
import { useAppDispatch } from '@/hooks/reduxHooks'
import { addToCart } from '@/context/cart/cartSlice'



const PizzaCard = ({ pizza }: any) => {

    const dispatch = useAppDispatch();
    const handleAddButton = () => {
        dispatch(addToCart(pizza));
    }
    return (
        <Link href={`/${pizza.id}`} asChild>
            <Pressable style={styles.card} key={pizza.id}>
                <Text style={{ fontSize: 20, color: "white" }}>{pizza.name}</Text>
                <Pressable onPress={handleAddButton}>
                    <TabBarIcon name='add-circle' color="white" />
                </Pressable>
            </Pressable>
        </Link>
    )
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default PizzaCard
