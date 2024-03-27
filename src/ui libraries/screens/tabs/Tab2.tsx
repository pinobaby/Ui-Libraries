import React from 'react'
import { View, Text } from 'react-native'

const Tab2 = () => {
  return (
    <View style={styles.container}>
      <Text>Tab2 Screen</Text>
    </View>
  )
}

export default Tab2

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
})