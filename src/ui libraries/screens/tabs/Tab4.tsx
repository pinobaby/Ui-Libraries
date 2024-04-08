import React from 'react'
import { View, Text } from 'react-native'
import LottieView from 'lottie-react-native';

const Tab4 = () => {
    return (
        <View style={styles.container}>
        <LottieView
          source={require("../../../assets/appSplash.json")} // Ruta al archivo JSON de la animación
          autoPlay={true} // Iniciar animación automáticamente
          loop={true}
          speed={1}
          style={styles.animatedBackground}
        />
        </View>
    )
}

export default Tab4

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  animatedBackground: {
    width: "100%",
    height: "100%",
  },
});