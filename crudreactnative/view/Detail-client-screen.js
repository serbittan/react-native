import React from 'react'
import { View, StyleSheet, Text, Alert } from 'react-native'
import { Headline, Subheading, Button, FAB } from 'react-native-paper'

import { deleteClientApi } from '../logic'
import globalStyles from '../styles/global-styles'


const DetailClientScreen = ({ route, navigation }) => {
    const { params: { item: { name, phone, email, company, id }, setapicall } } = route

    const showAlert = () => {
        Alert.alert(
            'Delete',
            'Are you sure you want delete this client?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'Delete',
                    onPress: () => deleteClient()
                }
            ]
        )
    }

    const deleteClient = () => {
        (async () => {
            try {
                await deleteClientApi(id)

            } catch (error) {
                console.log(error)
            }

        })()
        // redirect.
        navigation.navigate('Home')
        // to activate apicall a true.
        setapicall(true)
    }

    return (
        <View style={globalStyles.container}>
            <Headline style={globalStyles.title}>{name}</Headline>

            <Text style={styles.text}>Email: <Subheading>{email}</Subheading></Text>
            <Text style={styles.text}>Phone: <Subheading>{phone}</Subheading></Text>
            <Text style={styles.text}>Company: <Subheading>{company}</Subheading></Text>

            <Button
                icon="minus-circle"
                mode="contained"
                style={styles.btndelete}
                onPress={() => showAlert()}
            >
                Delete Client
            </Button>

            <FAB
                icon="pencil"
                style={globalStyles.fab}
                onPress={() => navigation.navigate('NewClient', { client: route.params.item, setapicall })}
            />

        </View>
    )
}


const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        marginBottom: 20,
        marginHorizontal: 15
    },
    btndelete: {
        marginTop: 80,
        backgroundColor: 'red'
    }
})


export default DetailClientScreen