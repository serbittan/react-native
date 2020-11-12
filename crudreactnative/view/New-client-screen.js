import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Headline, TextInput, Button, Paragraph, Dialog, Portal } from 'react-native-paper'
import globalStyles from '../styles/global-styles'

import { setClientApi } from '../logic'



const NewClientScreen = ({ navigation }) => {
    // State local.
    const [name, setname] = useState('')
    const [phone, setphone] = useState('')
    const [email, setemail] = useState('')
    const [company, setcompany] = useState('')

    // State para alert.
    const [alert, setalert] = useState(false);

    // Enviar form a la api.
    const onSetApi = () => {
        // creamos el obj client.
        (async () => {
            const client = { name, phone, email, company }
            try {
                await setClientApi(client)

                // redireccionamos a home.
                navigation.navigate('Home')

            } catch (error) {
                if (error.message === 'all fields are required') {
                    setalert(true)

                } else {
                    console.log(error)
                }
                return
            }
        })()

    }

    return (

        <View style={globalStyles.container}>

            <Headline style={globalStyles.title}>New Client</Headline>
            <TextInput
                selectionColor="#fff"
                style={styles.input}
                mode="outlined"
                label="Name"
                placeholder="Your Name"
                onChangeText={text => setname(text)}
                value={name} />
            <TextInput
                style={styles.input}
                mode="outlined"
                label="Phone"
                placeholder="Your Phone"
                onChangeText={text => setphone(text)}
                value={phone} />
            <TextInput
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
                Add New Client
                </Button>
            <View>
                <Portal>
                    <Dialog visible={alert} onDismiss={() => setalert(false)}>
                        <Dialog.Title>Error</Dialog.Title>
                        <Dialog.Content>
                            <Paragraph>All fields are required!!</Paragraph>
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