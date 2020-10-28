import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

const ItemAppointment = ({ appointment, dialogoEliminar }) => {
    const { patient, owner, symptoms, id } = appointment

    // const dialogoEliminar = () => {
    //     console.log('eliminando...')
    // }
    return ( 
        <View style={styles.appointment}>
            <View>
                <Text style={styles.label}>Patient:</Text>
                <Text style={styles.text}>{patient}</Text>
            </View>

            <View>
                <Text style={styles.label}>Owner:</Text>
                <Text style={styles.text}>{owner}</Text>
            </View>

            <View>
                <Text style={styles.label}>Symptoms:</Text>
                <Text style={styles.text}>{symptoms}</Text>
            </View>

            <View>
                <TouchableHighlight onPress={() => dialogoEliminar(id)} style={styles.button} >
                        <Text style={styles.btntext}>Delete &times;</Text>
                </TouchableHighlight>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    appointment: {
        backgroundColor: '#fff',
        marginBottom: 10,
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    text: {
        fontSize: 18
    },
    button: {
        backgroundColor: 'red',
        padding: 10,
        marginVertical: 10
    },
    btntext: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})
 
export default ItemAppointment