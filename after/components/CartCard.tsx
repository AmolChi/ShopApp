import { CartItem } from "@/types"
import { useEffect, useState } from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Swipeable } from "react-native-gesture-handler"
import { MaterialIcons } from "@expo/vector-icons"
import { FontAwesome6 } from "@expo/vector-icons"

const CartCard = ({ item, deleteFunction , handleAdd, handleRemove, numberFormat }: CartItem | any) => {

  const [error, setError] = useState(false)

  const handleError = () => {
    setError(true)
  }

  const handleMinus = ()=>{
    handleRemove(item)
  }
  
  const handlePlus = ()=>{
    handleAdd(item)
  }

  const rightSwipe = () => {
    return (
      <View style={{ width: 60, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => { deleteFunction(item) }}>
          <MaterialIcons name="delete" size={35} color='#FA4A0C' />
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <Swipeable renderRightActions={rightSwipe}>

      <View style={styles.container}>
        <Image source={error ? require('../assets/images/noImage.jpg') : { uri: item.img }} style={styles.image} onError={handleError} />

        <View style={{ flex: 10 }}>

          <Text style={{ fontSize: 17, margin: 'auto', color: 'black' }}>
            {
              item.name
            }
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Text style={{fontWeight:'bold'}}>
              {
                numberFormat(item.price)
              }
            </Text>
            <View style={styles.pillBox}>
              <TouchableOpacity onPress={handleMinus}>
                <FontAwesome6 name='minus' color='white' />
              </TouchableOpacity>
              <Text style={{color:'white'}}>
                {
                  item.quantity
                }
              </Text>
              <TouchableOpacity onPress = {handlePlus}>
                <FontAwesome6 name='add' color='white' />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Swipeable>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 25,
    width: 330,
    flexDirection: 'row',
    height: 'auto'
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    flex: 3,
    objectFit: 'fill'
  },
  pillBox: {
    flexDirection: 'row',
    gap: 12, alignItems: "center",
    backgroundColor: '#f25f2a',
    borderRadius: 40,
    paddingHorizontal: 10,
    paddingVertical: 3
  }
})

export default CartCard