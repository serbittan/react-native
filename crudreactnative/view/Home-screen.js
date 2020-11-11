import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Headline } from 'react-native-paper'

import globalStyles from '../styles/global-styles'

const HomeScreen = () => {
    return ( 
        <View style={globalStyles.container}>
            <Headline style={globalStyles.title}>Clients</Headline>

        </View>
     )
}

const styles = StyleSheet.create({
    
})
 
export default HomeScreen