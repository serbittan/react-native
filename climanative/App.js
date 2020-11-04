import React, { useState } from 'react'
import { Alert } from 'react-native'

import { Clima, Form } from './components'
import getWeather from './logic/get-weather'

import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'



const App = () => {
  // State de Clima.
  const [temperature, setTemperature] = useState({})

  // State para el backgroundcolor en función de la temperatura.
  const [bkgcolor, setBkgcolor] = useState('rgb(71, 149, 212)')

  // State de Form.
  const [weather, setWeather] = useState({
    city: '',
    country: ''
  })

  // Para ocultar el teclado virtual al presionar cualquier lado de la pantalla.
  const hideKeyboard = () => {
    Keyboard.dismiss()
  }

  // En caso de error en los datos.
  const showAlert = () => {
    Alert.alert(
      'Alert',
      'Are you sure the fields are correct?',
      [
        {
          text: 'Ok', onPress: () => console.log('Ok Pressed')
        }
      ]
    )
  }

  // Consulta a la Api.
  const handlerCheckWeather = ({ city, country }) => {
    (async () => {
      try {
        const response = await getWeather({ city, country })

        const { main, weather } = response
        setTemperature({main, weather})

        const kelvin = 273.15

        if (parseInt(main.temp - kelvin) < 10){
          setBkgcolor('rgb(105, 108, 149)')

        } else if (parseInt(main.temp - kelvin) >= 10 && parseInt(main.temp - kelvin) < 25) {
          setBkgcolor('rgb(71, 149, 212)')

        } else {
          setBkgcolor('rgb(178, 28, 61)')
        }


      } catch (error) {
        console.log(error)
        showAlert()
      }

    })()
  }

  // Objeto para el backgroundcolor en los style.
  const bgColorApp = {
    backgroundColor: bkgcolor
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={() => hideKeyboard()}>
        <View style={[styles.app, bgColorApp]}>
          <View style={styles.contenido}>
             
            <Clima
              temperature={temperature}

            />  
            <Form
              weather={weather}
              setWeather={setWeather}
              checkWeatherApi={handlerCheckWeather}
            /> 
          
          </View>

        </View>
      </TouchableWithoutFeedback>
    </>
  )
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    // backgroundColor: 'rgb(71, 149, 212)',
    justifyContent: 'center'
  },
  contenido: {
    marginHorizontal: '2.5%'
  }
});

export default App
