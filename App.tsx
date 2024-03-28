import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import BottomTabsNavigator from './src/ui libraries/navigator/BottomTabsNavigator';
import { StyleSheet } from 'react-native';
import { GluestackUIProvider } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {

  return (

    <GestureHandlerRootView style={{ flex: 1 }}>
      <GluestackUIProvider config={config}>
        <NavigationContainer>
          <BottomTabsNavigator />
        </NavigationContainer>
      </GluestackUIProvider>
    </GestureHandlerRootView>

  );
}




