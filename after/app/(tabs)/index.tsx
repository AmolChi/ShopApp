import { FlatList, StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import PizzaCard from '@/components/PizzaCard';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { fetchData } from '@/context/data/dataSlice';
import { useFonts } from 'expo-font';

export default function HomeScreen() {

  
  const [font] = useFonts({
    SFPro:require('../../assets/fonts/SF-Pro-Rounded-Regular.ttf')
  })

  const data = useAppSelector(state => state.data);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [])

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Pizza Listing</Text>
      {data.isLoading && <Text style={styles.text}>Loading Pizzas ... </Text>}
      {!data.isLoading && data.error ? <Text style={styles.text}>Sorry Please Try Again Later</Text> : <></>}
      {
        !data.isLoading &&
        data.data.length > 0 ?
          <View style={styles.pizzasContainer}>
            {
              data.data.map((pizza,key) => <PizzaCard pizza={pizza} key={key}/>)
            }
          </View> : <></>
      } */}
      <Text style={styles.text}>
        Delicious{'\n'}
        Food for you
      </Text>
      <FlatList
        data={data.data}
        renderItem={(data)=> <PizzaCard pizza={data.item}/>}
        horizontal={true}
        snapToAlignment='center'
        contentContainerStyle={{gap:10, padding:10}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // appContainer: {
  //   padding: 10,
  //   gap: 40
  // },
  // text: {
  //   fontSize: 20,
  //   fontWeight: "bold",
  //   top: 40,
  //   alignSelf: "center",
  // },
  // pizzasContainer: {
  //   gap: 20,
  // }

  container:{
    paddingLeft:50,
    paddingTop:70,
  },
  text:{
    fontSize:34,
    fontFamily: 'SFPro'
  }
});
