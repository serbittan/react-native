import 'react-native-gesture-handler'
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Framework de Ui.
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

import { HomeScreen, NewClientScreen, DetailClientScreen } from './view'
import BarHeader from './components/ui/Bar-header'


const Stack = createStackNavigator()
console.log(Stack)
// customizamos algunas propiedades de color.
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1774f2',
    accent: '#0655bf'
  }
}
console.log(theme.colors)

const App = () => {
    
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: { backgroundColor: theme.colors.primary },
              headerTintColor: theme.colors.surface,
              headerTitleStyle: { fontSize: 20, textTransform: 'uppercase', fontWeight: 'bold' }
            }} >
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              // (lo siguiente se comenta cuando creamos un botton nuevo y eliminamos este del barHeader)
              // options={({ navigation }) => ({
              //   //callback.
              //   headerLeft: props => (<BarHeader {...props} navigation={navigation} />)
              // })} 
              />

            <Stack.Screen name="NewClient" component={NewClientScreen} options={{ title: 'New Client' }} />
            <Stack.Screen name="DetailClient" component={DetailClientScreen} options={{ title: 'Detail Client' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>

  )
}


const styles = StyleSheet.create({

})

export default App
