import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, FlatList } from 'react-native'
import { Image, Input, InputField, InputIcon, InputSlot, SearchIcon } from '@gluestack-ui/themed';

const BASE_URI = 'https://source.unsplash.com/random?sig=';

const Tab1 = () => {

  const [data, setDate] = useState<number[]>([]);

  useEffect(() => {
    fetchMore();
  }, []);
  const fetchMore = () => {
    setDate(prevState => [
      ...prevState,
      ...Array.from({ length: 20 }).map((_, i) => i + 1 + prevState.length),
    ]);
  };

  return (
    <SafeAreaView>

      <FlatList
        data={data}
        style={styles.list}
        numColumns={3}
        onEndReached={fetchMore}
        keyExtractor={e => e}
        renderItem={({ item }) => (
          <Image source={{ uri: BASE_URI + item }} style={styles.item} />
        )}
      />
    </SafeAreaView>


  )
}

export default Tab1

import { StyleSheet } from 'react-native';

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
