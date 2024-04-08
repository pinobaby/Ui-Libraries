
import { AutoFocus, Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';


const Tab2 = () => {

  const [scanned, setScanned] = useState(false);
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (permission?.status !== 'granted') {
    return (
      <View style={styles.container}>
        <Text style={{
          alignSelf: 'center',
          alignItems: 'center',
        }}>Permiso no concedido</Text>
        <Button title="Solicitar permiso" onPress={requestPermission} />
      </View>
    );
  }

  const ScanQR = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    if (status === 'granted') {
      setScanned(false);
    }
  };

  const handleBarCodeScanned = (scanData: BarCodeScannerResult) => {
    setScanned(true);
    const { data } = scanData;
    Linking.openURL(data);
  };

  return (
    <View style={styles.container}>
      <Camera
        autoFocus={AutoFocus.on}
        focusable={true}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.camera}
        type={type}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={ScanQR}>
            <Text style={styles.text}>Scan QR</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  )
}

export default Tab2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 16,
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});