import React from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'

const BarHeader = ({ navigation }) => {

    const handlePress = () => {
        navigation.navigate('NewClient')
    }

    return (
        <Button onPress={() => handlePress()} icon="plus-circle" color="white">
            New Client
        </Button>
    )
}

const styles = StyleSheet.create({
    
})
export default BarHeader