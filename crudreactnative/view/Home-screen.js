import React, { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { Headline, List } from 'react-native-paper'

import globalStyles from '../styles/global-styles'

import { getClients } from '../logic'

const HomeScreen = () => {
    // State lista clientes.
    const [listclients, setlistclients] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const response = await getClients()
                console.log(response.data)
                setlistclients(response.data)
            } catch (error) {
                console.log(error)
            }
        })()

    }, [])


    return ( 
        <View style={globalStyles.container}>
            <Headline style={globalStyles.title}>Clients</Headline>
            <FlatList
                data={listclients}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (<List.Item title={item.name} description={item.company}/>)}
            />
        </View>
     )
}

const styles = StyleSheet.create({
    
})
 
export default HomeScreen