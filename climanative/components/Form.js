import React, { useState } from 'react'
import { View, TextInput, StyleSheet, TouchableWithoutFeedback, Text, Animated, Alert } from 'react-native'
import { Picker } from '@react-native-picker/picker'

const Form = ({ weather, setWeather, checkWeatherApi }) => {
    const { city, country } = weather

    // Function para mostrar alerta.
    const showAlert = () => {
        Alert.alert(
            'Error',
            'All fields are required',
            [
                { text: "OK", onPress: () => console.log("OK Pressed")}
            ]
        )
    }

    // Function para la consulta a la Api.
    const checkWeather = ({ city, country }) => {
        // validación.
        if (!city.trim() || !country.trim()){
            // mostrar alerta.
            showAlert()

            return
        }
        // Si pasa la validación.
        checkWeatherApi({ city, country })
    }

    // Para la animación.
    const [ btnanimation ] = useState(new Animated.Value(1))

    const btnIn = () => {
        Animated.spring(btnanimation, {
            toValue: .75,
            useNativeDriver: true // default
        }).start()    
    }

    const btnOut = () => {
       Animated.spring( btnanimation, {
           toValue: 1,
           friction: 4,
           tension: 30,
           useNativeDriver: true  // default
       }).start()
    }

    // Creamos objeto para definir el stilo de la animación. Tiene que ver con los estilos de css.
    const styleAnimation = {
        transform: [{ scale: btnanimation }]
    }

    return ( 
        <>
         <View>
             <View>
                <TextInput
                    onChangeText={ city => setWeather({ ...weather, city})}
                    value={city}
                    style={styles.input}
                    placeholder="City"
                    placeholderTextColor="#a9a9a9"
                    autoFocus
                />
             </View>
             <View>
                 <Picker 
                    itemStyle={{ backgroundColor: '#fff', height: 120 }}
                    onValueChange={ country => setWeather({...weather, country})}
                    selectedValue={country}
                    >
                     <Picker.Item label="-- Select --" value="" />
                     <Picker.Item label="United States" value="US" />
                     <Picker.Item label="Spain" value="ES" />
                     <Picker.Item label="France" value="FR" />
                     <Picker.Item label="Germany" value="DE" />
                     <Picker.Item label="Russia" value="RU" />
                     <Picker.Item label="Iceland" value="IS" />
                     <Picker.Item label="Switzerland" value="CH" />
                     <Picker.Item label="Ecuador" value="EC" />
                 </Picker>
             </View>
             <TouchableWithoutFeedback
                onPressIn={() => btnIn()}
                onPressOut={() => btnOut()}
                onPress={() => checkWeather({ city, country })}
             >
                 <Animated.View style={[styles.btnSearch, styleAnimation]}>
                     <Text style={styles.btnText}>Search Weather</Text>
                 </Animated.View>

             </TouchableWithoutFeedback>
         </View>
        </>
     )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#fff',
        padding: 10,
        height: 50,
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center'
    },
    btnSearch: {
        marginTop: 50,
        backgroundColor: 'black',
        padding: 10,
        justifyContent: 'center'
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center'
    }
})
 
export default Form