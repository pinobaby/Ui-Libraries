import React from 'react'
import { View, Text } from 'react-native'
import { Image } from '@gluestack-ui/themed';
const Tab3 = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{ marginTop: 20 }}
        size="lg"
        borderRadius="$full"
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYMRmTOrZ8D1Dv4oPEOR04FVrpVFkF-XxuF2eSrS68Jg&s",
        }}
      />
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
    justifyContent: 'flex-start',
  },

})