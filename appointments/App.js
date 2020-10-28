import React, { useState } from 'react';
import {
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
  const [appointments, setAppointments] = useState([
    { id: '1', patient: 'Hook', owner: 'Pepe', symptoms: 'no duerme' },
    { id: '2', patient: 'Redux', owner: 'Juan', symptoms: 'no duerme' },
    { id: '3', patient: 'React', owner: 'Carmen', symptoms: 'no duerme' },
    { id: '4', patient: 'Native', owner: 'Oscar', symptoms: 'no duerme' }
  ])

  // Eliminar pacientes del state.
  const handleDialogoEliminar = id => {
    setAppointments((appointments) => {
      return appointments.filter(appointment => appointment.id !== id)
    })
  }

  // Función que muestra u oculta formulario/citas.
  const showForm = () => {
    setMostrarForm(!mostrarform)
  }

  // Ocultar el teclado en cualquier parte de la pantalla.
  const hideKeyboard = () => {
    Keyboard.dismiss()
  }


  return (

    <TouchableWithoutFeedback onPress={() => hideKeyboard()}>
      <View style={styles.contenedor}>

        <Text style={styles.title}>Appointment Manager</Text>

        <TouchableHighlight onPress={() => showForm()} style={styles.btnshowform}>
          <Text style={styles.btntextform}>{mostrarform ? 'Cancel Appointment': 'Create Appointment'}</Text>
        </TouchableHighlight>


        <View style={styles.contenido}>

          {mostrarform ? (
            <>
              <Text style={styles.title}>Create New Appointment</Text>
              <Form appointments={appointments} setAppointments={setAppointments} showForm={showForm} />
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

      </View>
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
