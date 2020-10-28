import React, { useState, useEffect } from 'react'
import { StyleSheet, Image, ScrollView, ActivityIndicator, View } from 'react-native'

import { Header, Form, Quote } from './components'
import { apiQuoteConsult } from './logic'



const App = () => {
  // State de Form.
  const [coin, setCoin] = useState('')
  const [cryptocurrency, setCryptocurrency] = useState('')

  // State para consulta Api.
  const [apiconsult, setApiconsult] = useState(false)

  // State para el spinner ActivityIndicator.
  const [spinner, setSpinner] = useState(false)

  // State de cotización.
  const [quote, setQuote] = useState({})


  useEffect(() => {
    if (apiconsult) {
      (async () => {
        try {
          const response = await apiQuoteConsult(coin, cryptocurrency)

          setSpinner(true)

          setTimeout(() => {
            setQuote(response.data.DISPLAY[cryptocurrency][coin])
            console.log(response.data.DISPLAY[cryptocurrency][coin])

            setSpinner(false)
          }, 1000)

        } catch (error) {
          console.log(error.response.data)
        }
      })()

      setApiconsult(false)
    }
  }, [apiconsult])



  // Condición Ternaria para ocultar spinner vs Quote. Carga condicional.  
  const componente = spinner ? (
    <ActivityIndicator size={'large'} color={'#5e49e3'} />) : (
      <Quote quote={quote} />)




  return (
    <>
      <ScrollView>
        <Header />
        <Image
          style={styles.image}
          source={require('./assets/img/cryptomonedas.png')}
        />
        <Form
          coin={coin}
          cryptocurrency={cryptocurrency}
          setCoin={setCoin}
          setCryptocurrency={setCryptocurrency}
          setApiconsult={setApiconsult}
        />
        <View style={{marginTop: 40}}>
          {componente}
        </View>


      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%'
  }
})

export default App
