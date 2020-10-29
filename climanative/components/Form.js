import React from 'react'
import { View, TextInput, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native'
import { Picker } from '@react-native-picker/picker'

const Form = () => {
    return ( 
        <>
         <View>
             <View>
                <TextInput
                    style={styles.input}
                    placeholder="City"
                    placeholderTextColor="#a9a9a9"
                    autoFocus
                />
             </View>
             <View>
                 <Picker itemStyle={{ backgroundColor: '#fff', height: 120}}>
                     <Picker.Item label="-- Select --" value="" />
                     <Picker.Item label="United States" value="US" />
                     <Picker.Item label="Spain" value="ES" />
                     <Picker.Item label="France" value="FR" />
                     <Picker.Item label="German" value="GE" />
                     <Picker.Item label="Rusia" value="RU" />
                     <Picker.Item label="Islandia" value="IS" />
                     <Picker.Item label="Suiza" value="CH" />
                 </Picker>
             </View>
             <TouchableWithoutFeedback>
                 <View style={styles.btnSearch}>
                     <Text style={styles.btnText}>Search Weather</Text>
                 </View>
             </TouchableWithoutFeedback>
         </View>
        </>
     )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#fff',
        padding: 10,
        height: 50,
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center'
    },
    btnSearch: {
        marginTop: 50,
        backgroundColor: 'black',
        padding: 10,
        justifyContent: 'center'
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center'
    }
})
 
export default Form