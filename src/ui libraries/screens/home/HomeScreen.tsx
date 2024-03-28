import React, { useEffect, useState } from 'react';
import { View, Text, Platform, SafeAreaView, FlatList } from 'react-native';
import { StyleSheet } from 'react-native';
import { Image } from '@gluestack-ui/themed';


const BASE_URI = 'https://source.unsplash.com/random?sig=';


const HomeScreen = () => {
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
        style={styles.content}
        onEndReached={fetchMore}

        keyExtractor={e => e}
        renderItem={({ item }) => (
          <Image source={{ uri: BASE_URI + item }} style={styles.item} />
        )}
      />
    </SafeAreaView>
  )
}



export default HomeScreen


const styles = StyleSheet.create({
  list: {
    width: '100%',
    backgroundColor: '#000',
  },
  item: {
    aspectRatio: 1,
    width: '100%',
    height: '100%',
    flex: 1,
    marginTop: 30,
    marginBottom: 30,
  },
  content: {
    width: '100%',
    height: '100%',
  }

});