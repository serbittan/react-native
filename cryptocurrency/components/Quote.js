import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const Quote = ({ quote }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = quote

    if (Object.keys(quote).length === 0) return null  // evitamos que algun objeto llegue vacio y nos de error.

    return (
        <View style={styles.resultado}>

            <Text style={[styles.text, styles.price]}>  
                <Text style={styles.span}>{PRICE}</Text>
            </Text>

            <Text style={styles.text}>Highest Price of the Day: {' '}
                <Text style={styles.span}>{HIGHDAY}</Text>
            </Text>

            <Text style={styles.text}>Lowest Price of the Day: {' '}
                <Text style={styles.span}>{LOWDAY}</Text>
            </Text>

            <Text style={styles.text}>Variation last 24H: {' '}
                <Text style={styles.span}>{CHANGEPCT24HOUR} %</Text>
            </Text>

            <Text style={styles.text}>Last Update: {' '}
                <Text style={styles.span}>{LASTUPDATE}</Text>
            </Text>

        </View>
        
            
    )
}

const styles = StyleSheet.create({
    resultado: {
        backgroundColor: '#5e49e2',
        padding: 20
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Lato-Regular',
        marginBottom: 10
    },
    price: {
        fontSize: 38
    },
    span: {
        fontFamily: 'Lato-Black'
    }
})
 
export default Quote