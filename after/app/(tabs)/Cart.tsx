import CartCard from '@/components/CartCard';
import { addToCart, removeAllFromCart, removeOneFromCart } from '@/context/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { CartItem } from '@/types';
import { useEffect } from 'react';
import { Button, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function TabTwoScreen() {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const numberFormat = (num: number) => {
    return Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(num);
  }

  const onDeleteClick = (item:CartItem)=>{
    dispatch(removeAllFromCart(item))
  }

  const handleAdd = (item:CartItem) =>{
    dispatch(addToCart(item))
  }

  const handleRemove = (item:CartItem)=>{
    dispatch(removeOneFromCart(item))
  }

  return (
    <View style={{ flex: 1 }}>
      {cart.cart.length == 0 ? (
        <View style={styles.container}>
          <Image source={require('@/assets/images/CartImage.png')} style={styles.image} />
          <Text style={styles.noOrdersText}>No orders yet</Text>
          <Text style={styles.instructionsText}>
            Click on the Menu button to find yourself food
          </Text>
        </View>
      ) : (
        <View>
          <View style={{height:'10%',flexDirection:'row',top:40,margin:'auto'}}>
            <Image source={require('@/assets/images/swipe.png')} style={{height:20,width:20}}/>
            <Text>
              Swipe on an item to delete it entirely
            </Text>
          </View>
            <View style={{ height: '80%' }}>
            <FlatList
              data={cart.cart}
              renderItem={({ item }) => <CartCard item={item} deleteFunction = {onDeleteClick} 
              handleAdd = {handleAdd}
              handleRemove = {handleRemove}
              numberFormat = {numberFormat}
              />}
              contentContainerStyle={{gap:10,alignItems:'center'}}
            />
          </View>
            <Pressable style={styles.button}>
              <Text style={{ margin: 'auto', fontSize: 17, color: '#FFFFFF', fontWeight: 'bold' }}>Pay {numberFormat(cart.totalCost)}</Text>
            </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  noOrdersText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  instructionsText: {
    fontSize: 17,
    textAlign: 'center',
    maxWidth: 220,
  },
  button:{
    backgroundColor:'#f25f2a',
    alignItems:'center',
    width:314,
    height:70,
    margin:'auto',
    borderRadius:30,
  },
});
