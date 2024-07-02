import CartCard from '@/components/CartCard';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function TabTwoScreen() {

  const cart = useAppSelector(state => state.cart)
  const dispatch = useAppDispatch();


  return (
    <View style={styles.appContainer}>
      {
        cart.cart.length == 0?<Text style={styles.text}>
          Please Add something to your cart
        </Text>:<View>
          <Text style={styles.text}>
            Current Cart
            <View style={styles.container}>

            {
              cart.cart.map((item)=><CartCard pizza={item}/>)
            }
            </View>
          </Text>
          
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 10,
    gap: 40
  },
 text:{
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: "bold",
    top: 40,
    alignSelf: "center",
 },
 container:{
   top:100,
   gap: 20,
   color: "#ffffff"
 }
});
