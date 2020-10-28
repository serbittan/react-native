import React from 'react'
import { Text, StyleSheet, Platform, Surface } from 'react-native'

const Header = () => ( 
    <Text style={styles.header}>Cryptocurrency</Text>
 )

 
export default Header

const styles = StyleSheet.create({
    header: {
        paddingTop: Platform.OS === 'ios' ? 50 : 10,
        fontFamily: 'Lato-Black',
        backgroundColor: '#5e49e2',
        paddingBottom: 10,
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#fff',
        fontSize: 20,
        marginBottom: 30 // separación para el siguiente elemento.
    }
})