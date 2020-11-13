import React, { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { Headline, List, Button, FAB } from 'react-native-paper'

import globalStyles from '../styles/global-styles'

import { getClients } from '../logic'

const HomeScreen = ({ navigation }) => {
    // State lista clientes.
    const [clientes, setclientes] = useState([])

    // State de llamada a api para renderizar otra vez (añadir a la Lista el último cliente creado).
    const [apicall, setapicall] = useState(true)


    useEffect(() => {
        if (apicall) {
            (async () => {
                try {
                    const response = await getClients()
    
                    setclientes(response.data)
                    setapicall(false)

                } catch (error) {
                    console.log(error)
                }
                
            })()
        }
        
    }, [apicall])



    return ( 
        <View style={globalStyles.container}>
            <Button icon="plus-circle" onPress={() => navigation.navigate("NewClient", { setapicall })}>New Client</Button>

            <Headline style={globalStyles.title}>{clientes.length > 0 ? 'Clients' : 'Not Clients Yet'}</Headline>
            <FlatList
                data={clientes}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (<List.Item title={item.name} description={item.company} onPress={() => navigation.navigate("DetailClient", { item, setapicall })}/>)}
            />

            <FAB 
                style={globalStyles.fab}
                icon="plus" 
                onPress={() => navigation.navigate("NewClient", { setapicall })}/>
        </View>
     )
}

 
export default HomeScreen