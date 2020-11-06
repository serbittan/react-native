import React, { useState } from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
    TouchableHighlight,
    Alert,
    ScrollView
} from 'react-native'

import DateTimePickerModal from "react-native-modal-datetime-picker"
import shortid from 'shortid'

const Form = ({ appointments, setAppointments, showForm, setDataAppointments }) => {

    // State para los inputs.
    const [patient, setPatient] = useState('')
    const [owner, setOwner] = useState('')
    const [phone, setPhone] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [symptoms, setSymptoms] = useState('')

    // State de los pickers Date/Time.
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirmDate = (date) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

        setDate(date.toLocaleDateString('en-US', options))

        hideDatePicker();
    };

    // Muestra Time-Picker.
    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const handleConfirmTime = (time) => {
        setTime(time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

        hideTimePicker();
    };

    // Crear nueva cita.
    const createNewDate = () => {
        // validar campos.
        if ((!patient.trim()) || (!owner.trim()) || (!phone.trim()) || (!date.trim()) || (!time.trim()) || (!symptoms.trim())) {

            // falla validación.
            showAlert()

            return
        }
        
        // crear una nueva cita.
        const appointment = { patient, owner, phone, date, time, symptoms }

        appointment.id = shortid.generate()
        
        // agregar al state.
        const newAppointment = [...appointments, appointment]
        setAppointments(newAppointment)

        // guardar datos en asyncStorage.
        setDataAppointments(JSON.stringify(newAppointment))

        // ocultar el form.
        showForm(false)
    }

    // Función que muestra alert si falla validación.
    const showAlert = () => {
        Alert.alert(
            "Error", // title.
            "All fields are require", // mensaje texto.
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }  // array de botones.
            ]
        )
    }


    return (
        <>
            <ScrollView style={styles.form}>
                <View>
                    <Text style={styles.label}>Patient:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(texto) => setPatient(texto)}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Owner:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(texto) => setOwner(texto)}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Phone Contact:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(texto) => setPhone(texto)}
                        keyboardType='numeric'
                    />
                </View>

                <View>
                    <Text style={styles.label}>Date:</Text>
                    <Button title="Show Date Picker" onPress={showDatePicker} />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirmDate}
                        onCancel={hideDatePicker}
                        locale='es_ES'
                        // headerTextIOS='Elige una hora'
                        // cancelTextIOS='Cancelar'
                        // confirmTextIOS='Confirmar'
                        // is24Hour
                    />
                    <Text>{date}</Text>
                </View>

                <View>
                    <Text style={styles.label}>Time:</Text>
                    <Button title="Show Time Picker" onPress={showTimePicker} />
                    <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode="time"
                        onConfirm={handleConfirmTime}
                        onCancel={hideTimePicker}
                        headerTextIOS='Pick a time'
                    />
                    <Text>{time}</Text>
                </View>

                <View>
                    <Text style={styles.label}>Symptoms:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(texto) => setSymptoms(texto)}
                        multiline
                    />
                </View>

                <View>
                    <TouchableHighlight onPress={() => createNewDate()} style={styles.btnSubmit} >
                        <Text style={styles.btntextSubmit}>Send</Text>
                    </TouchableHighlight>
                </View>

            </ScrollView>

        </>
    )
}

const styles = StyleSheet.create({
    form: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    input: {
        marginTop: 10,
        height: 50,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    btnSubmit: {
        backgroundColor: '#7d024e',
        padding: 10,
        marginVertical: 10
    },
    btntextSubmit: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})

export default Form