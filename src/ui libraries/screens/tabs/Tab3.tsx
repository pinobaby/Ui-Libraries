import React from 'react'
import { View, Text } from 'react-native'

const Tab3 = () => {
  return (
    <View style={styles.container}>
      <Text>Tab3 Screen</Text>
    </View>
  )
}

export default Tab3

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
})