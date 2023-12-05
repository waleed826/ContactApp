import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Add = ({ navigation }) => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [number, setNumber] = useState('')
  const [contact, setContact] = useState([])

const saveButton = async () => {
    const savedContact = [...contact, { name, surname, number }]
    console.log("🚀 ~ file: Add.js:27 ~ saveButton ~ savedContact:", savedContact)
    setContact(savedContact)
    console.log(contact)
    const jsonValue = await JSON.stringify(contact);
    await AsyncStorage.setItem('my-key', jsonValue);
    console.log("🚀 ~ file: Add.js:38 ~ storeData ~ my:", jsonValue)
    navigation.navigate('Contacts')
}

return (
  <View style={{ flex: 1 }}>
    <View style={{ flexDirection: 'row', backgroundColor: 'white', padding: 15, justifyContent: 'space-between', elevation: 2 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <AntDesign name={'arrowleft'} size={27} color={'black'} onPress={() => navigation.replace('Contacts')} />
        <Text style={{ fontSize: 24, color: 'black', }}>Add</Text>
      </View>
      <View>
        <AntDesign name={'check'} color={'black'} size={30} onPress={saveButton} />
      </View>
    </View>
    <View style={{ margin: 10, padding: 10 }}>
      <Text>Name</Text>
      <TextInput
        placeholder='Enter name'
        onChangeText={setName}
        keyboardType='name-phone-pad'
        style={styles.txtInput}
      />
      <Text>Surname</Text>
      <TextInput
        placeholder='Enter Surname'
        onChangeText={setSurname}
        keyboardType='name-phone-pad'
        style={styles.txtInput}
      />
      <Text>Phone Number</Text>
      <TextInput placeholder='03_ _ _ _ _ _ _ _ _'
        onChangeText={setNumber}
        keyboardType='number-pad'
        style={styles.txtInput}
      />
    </View>
  </View>
)
}

export default Add

const styles = StyleSheet.create({
  txtInput: {
    borderColor: 'gray',
    borderWidth: 1,

  },
})