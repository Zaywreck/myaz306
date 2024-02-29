import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Intro = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>58 Alemde Tekiz</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    flex: 1,
    justifyContent: 'center', // vertical
    alignItems: 'center' // horizontal
  },
  h1: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    fontStyle: 'italic',
  }
})


export default Intro