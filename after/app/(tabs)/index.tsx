import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import PizzaCard from '@/components/PizzaCard';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { fetchData } from '@/context/data/dataSlice';
export default function HomeScreen() {


  const data = useAppSelector(state => state.data);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [])

  return (
    <View style={styles.appContainer}>
      <Text style={styles.text}>Pizza Listing</Text>
      {data.isLoading && <Text style={styles.text}>Loading Pizzas ... </Text>}
      {!data.isLoading && data.error ? <Text style={styles.text}>Sorry Please Try Again Later</Text> : <></>}
      {
        !data.isLoading &&
        data.data.length > 0 ?
          <View style={styles.pizzasContainer}>
            {
              data.data.map(pizza => <PizzaCard pizza={pizza} />)
            }
          </View> : <></>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 10,
    gap: 40
  },
  text: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: "bold",
    top: 40,
    alignSelf: "center",
  },
  pizzasContainer: {
    gap: 20,
    color: "#ffffff"
  }
});
