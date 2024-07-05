import { FlatList, StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import { useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { fetchData } from '@/context/data/dataSlice';
import { useFonts } from 'expo-font';
import ItemCard from '@/components/ItemCard';

export default function HomeScreen() {

  
  const [font] = useFonts({
    SFPro:require('../../assets/fonts/SF-Pro-Rounded-Regular.ttf')
  })

  const items = useAppSelector(state => state.data);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Delicious{'\n'}
        Food for you
      </Text>
      <FlatList
        data={items.data}
        renderItem={(data)=> <ItemCard pizza={data.item} />}
        horizontal={true}
        snapToAlignment='center'
        contentContainerStyle={{gap:10, padding:10}}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    paddingLeft:50,
    paddingTop:70,
  },
  text:{
    fontSize:34,
    fontFamily: 'SFPro'
  }
});
