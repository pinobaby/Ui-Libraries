import React, { useEffect, useState } from 'react';
import { View, Text, Platform, SafeAreaView, FlatList } from 'react-native';
import { StyleSheet } from 'react-native';
import { Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper, AddIcon, Box, Button, ButtonGroup, ButtonIcon, ButtonText, Center, FormControl, FormControlLabel, FormControlLabelText, HStack, Heading, Image, Input, InputField, InputIcon, InputSlot, KeyboardAvoidingView, SearchIcon, Slider, SliderFilledTrack, SliderThumb, SliderTrack, VStack, } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

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
    flex: 1,
  },
  content: {
    width: '100%',
    height: '100%',
  }

});