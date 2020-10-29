import React from 'react'
import { Clima, Form } from './components'

import {
  StyleSheet,
  View,
  
} from 'react-native'



const App = () => {
  return (
    <>
    <View style={styles.app}>
      <View style={styles.contenido}>
        <Form/>
      </View>

      <View>
        <Clima/>
      </View>


    </View>
      
    </>
  )
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'rgb(71, 149, 212)',
    justifyContent: 'center'
  },
  contenido: {
    marginHorizontal: '2.5%'
  }
});

export default App;
