import React from 'react'
import { } from 'react-native'
import { Button } from 'react-native-paper'

const BarHeader = () => {
    const handlePress = () => {
        console.log('agregando...')
    }
    
    return (
        <Button
            onPress={() => handlePress()}
            icon="">
            New Client</Button>
    )
}

export default BarHeader