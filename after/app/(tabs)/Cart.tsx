import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function TabTwoScreen() {

  const cart = useAppSelector(state => state.cart)
  const dispatch = useAppDispatch();


  return (
    <View>
      {
        cart.cart.length == 0?<Text style={styles.text}>
          Please Add something to your cart
        </Text>:<></>
      }
    </View>
  );
}

const styles = StyleSheet.create({
 text:{
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: "bold",
    top: 40,
    alignSelf: "center",
 }
});
