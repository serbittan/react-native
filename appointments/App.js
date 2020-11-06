import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import {
  ScrollView,
  FlatList,
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  Platform,  // Para correr código específico en un componente ios o android.
  TouchableWithoutFeedback, // button sin efecto al ser presionado
  Keyboard
} from 'react-native';

import { ItemAppointment, Form } from './components'



const App = () => {

  // Definir state para ocultar o mostrar el formulario o las citas.
  const [mostrarform, setMostrarForm] = useState(false)

  // Definir el state de appointments.
  const [appointments, setAppointments] = useState([])


  useEffect(() => {
    // traer el asyncStorage al cargar componente.
    const getAppointmentsStorage = async () => {
      try {
        const appointmentsStorage = await AsyncStorage.getItem('appointments')

        appointmentsStorage ? setAppointments(JSON.parse(appointmentsStorage)) : null 

      } catch (error) {
        console.log(error)
      }
    }
    getAppointmentsStorage()

  }, []);


  // Eliminar pacientes del state.
  const handleDialogoEliminar = id => {
    const filteredAppointments = appointments.filter(appointment => appointment.id !== id)

    setAppointments(filteredAppointments)
    // Eliminar el AsyncStorage.(guardando en su lugar las citas filtradas).
    setDataAppointments(JSON.stringify(filteredAppointments))
  }

  // Función que muestra u oculta formulario/citas.
  const showForm = () => {
    setMostrarForm(!mostrarform)
  }

  // Ocultar el teclado en cualquier parte de la pantalla.
  const hideKeyboard = () => {
    Keyboard.dismiss()
  }

  // Function para guardar las citas el asyncStorage.
  const setDataAppointments = async (appointmentsJSON) => {
    try {
      await AsyncStorage.setItem('appointments', appointmentsJSON)
      console.log(appointmentsJSON)
    } catch (error) {
      console.log(error)
    }
  }

  

  return (

    <TouchableWithoutFeedback onPress={() => hideKeyboard()}>
      <ScrollView style={styles.contenedor}>

        <Text style={styles.title}>Appointment Manager</Text>

        <TouchableHighlight onPress={() => showForm()} style={styles.btnshowform}>
          <Text style={styles.btntextform}>{mostrarform ? 'Cancel Appointment' : 'Create Appointment'}</Text>
        </TouchableHighlight>


        <View style={styles.contenido}>

          {mostrarform ? (
            <>
              <Text style={styles.title}>Create New Appointment</Text>
              <Form appointments={appointments} setAppointments={setAppointments} showForm={showForm} setDataAppointments={setDataAppointments} />
            </>
          ) : (
              <>
                <Text style={styles.title}>{appointments.length > 0 ? 'Manage your appointments' : 'Not appointments yet!'}</Text>
                <FlatList
                  style={styles.listado}
                  data={appointments}
                  renderItem={({ item }) =>
                    <ItemAppointment appointment={item} dialogoEliminar={handleDialogoEliminar} />}
                  keyExtractor={appointment => appointment.id}
                />
              </>
            )
          }

        </View>

      </ScrollView>
    </TouchableWithoutFeedback>

  )
}





const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#aa076b',
    flex: 1  // minHeight: '100%'
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: Platform.OS === 'ios' ? 20 : 15,
    marginTop: 40,
    fontWeight: 'bold',
    fontSize: 24
  },
  contenido: {
    flex: 1,
    marginHorizontal: '2.5%'
  },
  listado: {
    flex: 1
  },
  btnshowform: {
    backgroundColor: '#7d024e',
    padding: 10,
    marginVertical: 10
  },
  btntextform: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

export default App;
