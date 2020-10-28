import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TouchableHighlight, Alert } from 'react-native'
import { Picker } from '@react-native-community/picker'

import { getValueCryptocurrency } from '../logic'



const Form = ({ coin, cryptocurrency, setCoin, setCryptocurrency, setApiconsult }) => {
    // State local.
    const [cryptocurrencies, setCryptocurrencies] = useState([])

    // Funcion para leer valores del state de monedas.
    const selectCoin = (coin) => {
        setCoin(coin)
    }

    // Función para leer los valores del state de criptomonedas.
    const selectCrytocurrency = crypto => {
        setCryptocurrency(crypto)
    }

    // Función para alerta.
    const showAlert = () => {
        Alert.alert(
            "Error",
            "All fields are required",
            [
                {
                    text: "OK",
                    onPress: () => console.log('OK Pressed')
                }
            ]
        )
    }

    // Function para enviar el form cuando user da click.
    const quotePrice = () => {
        // validar campos.
        if (!coin.trim() || !cryptocurrency.trim()) {
            showAlert()

            return
        }
        setApiconsult(true)
    }


    // Use Effect para la consulta a api.
    useEffect(() => {
        (async () => {
            try {
                const response = await getValueCryptocurrency()
                
                setCryptocurrencies(response.data.Data)

            } catch (error) {
                console.log(error)
            }
        })()

    }, [])



    return (
        <View style={styles.contenedor}>
            <Text style={styles.label}>Coin</Text>

            <Picker
                itemStyle={{ height: 120 }}   // aplicamos una altura menor a cada item del select. Forma de hacerlo diferente.
                selectedValue={coin}   // esto mantiene el picker fijo en esa posición.
                onValueChange={coin => selectCoin(coin)}
            >
                <Picker.Item label="-Select-" value="" />
                <Picker.Item label="-Dolar ($)-" value="USD" />
                <Picker.Item label="-Euro (€)-" value="EUR" />
                <Picker.Item label="-Peso Mexican-" value="MXN" />
                <Picker.Item label="-Pound Sterling -" value="GBP" />
            </Picker>

            <Text style={styles.label}>Cryptocurrency</Text>

            <Picker
                itemStyle={{ height: 120 }}
                selectedValue={cryptocurrency}
                onValueChange={crypto => selectCrytocurrency(crypto)}
            >
                <Picker.Item label={"--Select--"} value="" />
                {cryptocurrencies.map(crypto => (
                    <Picker.Item
                        key={crypto.CoinInfo.Id}
                        label={crypto.CoinInfo.FullName}
                        value={crypto.CoinInfo.Name}
                    />
                ))}
            </Picker>

            <TouchableHighlight
                style={styles.btnQuote}
                onPress={() => quotePrice()}
            >
                <Text style={styles.textQuote}>Quote</Text>
            </TouchableHighlight>

        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        paddingHorizontal: '2.5%'
    },
    label: {
        fontSize: 22,
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
        marginVertical: 20
    },
    btnQuote: {
        backgroundColor: '#5e49e2',
        padding: 10,
        marginTop: 20,
    },
    textQuote: {
        textAlign: 'center',
        fontFamily: 'Lato-Black',
        fontSize: 18,
        textTransform: 'uppercase',
        color: '#fff'
    }
})

export default Form