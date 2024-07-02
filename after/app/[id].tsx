import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams } from 'expo-router'

const ProductDetails = () => {
  const {id} = useLocalSearchParams();

  return (
    <View>
      <Text style={styles.text}>
        Product Of ID {id}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: '#FFFFFF',
  },
})

export default ProductDetails