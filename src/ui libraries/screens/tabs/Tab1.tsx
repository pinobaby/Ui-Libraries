import React, { useEffect, useState } from 'react'

import { Image, Input, InputField, InputIcon, InputSlot, SearchIcon } from '@gluestack-ui/themed';
import { IconButton, Text, TouchableRipple } from 'react-native-paper'


const Tab1 = () => {


  const navigation = useNavigation()

  return (
    <TouchableRipple
      borderless={true}
      onPress={() => navigation.navigate('Tab2' as never)}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 0,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: -3
      }}>
      <IconButton
        icon='qrcode-scan'
        size={30}
      />
    </TouchableRipple>



  )
}

export default Tab1

import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  list: {
    width: '100%',
    backgroundColor: '#000',
  },
  item: {
    aspectRatio: 1,
    width: '100%',
    flex: 1,
  },
});
