import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Headline, TextInput, Button, Paragraph, Dialog, Portal } from 'react-native-paper'
import globalStyles from '../styles/global-styles'

import { setClientApi, updateClient } from '../logic'



const NewClientScreen = ({ route, navigation }) => {
    // State local.
    const [name, setname] = useState('')
    const [phone, setphone] = useState('')
    const [email, setemail] = useState('')
    const [company, setcompany] = useState('')

    // State para alert.
    const [alert, setalert] = useState(false)

    // Extraer la función del State api que viene por route.
    const { setapicall, client } = route.params

    // Detectar si estamos editando o creando.
    useEffect(() => {
        if (route.params.client) {
            const { params: { client: { name, phone, email, company } } } = route

            setname(name)
            setphone(phone),
                setemail(email)
            setcompany(company)
        }

    }, [client])

    // Enviar form a la api.
    const onSetApi = () => {
        if (!name.trim() || !phone.trim() || !email.trim() || !company.trim()) {
            setalert(true)
            return
        }
        // creamos el obj client.
        let client = { name, phone, email, company }

        // si editamos:
        if (route.params.client) {
            (async () => {
                try {
                    const { id } = route.params.client
                    client.id = id
                    await updateClient(client)

                } catch (error) {
                    console.log(error)
                }

            })()

        } else {
            (async () => {
                try {
                    await setClientApi(client)

                } catch (error) {

                    // if (error.message === 'all fields are required') {
                    //     console.log(error.message)
                    // setalert(true)

                    // } else {
                    //     console.log('aqui')
                    //     console.log(error)
                    // }

                    // return
                }

            })()

        }
        // redireccionamos a home.
        navigation.navigate('Home')

        // pasamos el State de api a true para que recarge de nuevo al redireccionar.
        setapicall(true)

    }

    return (

        <View style={globalStyles.container}>

            <Headline style={globalStyles.title}>{route.params.client ? "Edit Client" : "New Client"}</Headline>
            <TextInput
                autoFocus
                selectionColor="#fff"
                style={styles.input}
                mode="outlined"
                label="Name"
                placeholder="Your Name"
                onChangeText={text => setname(text)}
                value={name} />
            <TextInput
                keyboardType="phone-pad"
                style={styles.input}
                mode="outlined"
                label="Phone"
                placeholder="Your Phone"
                onChangeText={text => setphone(text)}
                value={phone} />
            <TextInput
                keyboardType="email-address"
                style={styles.input}
                mode="outlined"
                label="Email"
                placeholder="Your Email"
                onChangeText={text => setemail(text)}
                value={email} />
            <TextInput
                style={styles.input}
                mode="outlined"
                label="Company"
                placeholder="Company Name"
                onChangeText={text => setcompany(text)}
                value={company} />
            <Button
                mode="contained"
                icon="pencil"
                onPress={() => onSetApi()}
            >
                {route.params.client ? "Edit Client" : "Add New Client"}
            </Button>
            <View>
                <Portal>
                    <Dialog visible={alert} onDismiss={() => setalert(false)}>
                        <Dialog.Title>Error</Dialog.Title>
                        <Dialog.Content>
                            <Paragraph>All fields are required!</Paragraph>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={() => setalert(false)}>OK</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 20,
        backgroundColor: '#f5f5f5',
    }
})

export default NewClientScreen 