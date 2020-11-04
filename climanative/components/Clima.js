import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

const Clima = ({ temperature }) => {
    if (Object.keys(temperature).length === 0) return null
    
    const { main: {temp, temp_min, temp_max }, weather } = temperature
    const kelvin = 273.15

    return (
        <View style={styles.clima}>

            <Text style={ [styles.text, styles.actual] }>{parseInt(temp - kelvin)}
                <Text style={styles.temperatura}>&#x2103;</Text>
                <Image style={{ height:58, width:66 }}
                    source={{ uri:`http://openweathermap.org/img/w/${weather[0].icon}.png`}}
                />
            </Text>

            <View style={styles.temperaturas}>
                <Text style={styles.text}>Min: {''}
                    <Text style={styles.temperatura}>{parseInt(temp_min - kelvin)} &#x2103;</Text>
                </Text>
                <Text style={styles.text}>Max: {''}
                    <Text style={styles.temperatura}>{parseInt(temp_max - kelvin)} &#x2103;</Text>
                </Text>

            </View>
        </View> 
     )
}

const styles = StyleSheet.create({
    clima: {
       marginBottom: 20
    },
    text: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        marginRight: 20
    },
    actual: {
        fontSize: 80,
        marginRight: 0,
        fontWeight: 'bold'

    },
    temperatura: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    temperaturas: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})
 
export default Clima