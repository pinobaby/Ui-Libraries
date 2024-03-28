import React from 'react'
import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native';

const Tab4 = () => {
    return (
        <View style={styles.container}>
                <Text>Tab4 Screen</Text>
        </View>
    )
}

export default Tab4



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
})

