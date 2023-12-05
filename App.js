import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Contacts from './source/screens/Contacts'
import Add from './source/screens/Add'
import ContactDetails from './source/screens/ContactDetails'

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
//     <View style={{flex:1,zIndex:1}}>
//       <View style={{height:200,backgroundColor:'red',borderBottomLeftRadius:30,borderBottomRightRadius:30,zIndex:20}}>
//       </View>
//       <View style={{backgroundColor:'green',borderBottomLeftRadius:30,borderBottomRightRadius:30,height:100,zIndex:9,bottom:30,elevation:70,shadowColor:'red'}}>

// </View>
//     </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Contacts' >
      <Stack.Screen name={'Contacts'} component={Contacts} />
      <Stack.Screen name={'Add'} component={Add} 
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen name={'Contact Details'} component={ContactDetails} />
      </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})


