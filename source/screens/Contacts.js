import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity,ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// import {  } from 'react-native-gesture-handler'

const Contacts = ({route,navigation}) => {

    const { height, width } = Dimensions.get('screen')
    useEffect(()=>{
        getContacts()
    },[])
    const [contactData , setContacts] = useState([])
    // const { name,number,surname } = route.name;
    // console.log("🚀 ~ file: Contacts.js:10 ~ Contacts ~ name:", name)
    // console.log("🚀 ~ file: Contacts.js:9 ~ Contacts ~ surname:", route.params?.name ,route.params?.number )
    // console.log("🚀 ~ file: Contacts.js:9 ~ Contacts ~ name:", name)
    // const contact = [route.params?.name ,route.params?.number,route.params?.surname ]
    // console.log(contact)
    // const array = [...contact,route.params?.name ,route.params?.number,route.params?.surname]
     const getContacts = async()=>{
        const data = await AsyncStorage.getItem('my-key')
        const contacts = JSON.parse(data)
        setContacts(contacts)
        console.log("🚀 ~ file: Contacts.js:20 ~ getContacts ~ contacts:", contacts)
     }
    return (
        <View style={{ flex: 1}}>
            
            <View style={{ alignItems: 'center', justifyContent: 'center',}}>
              {/* {contactData.length ==  ?  */}
                 <View style={{}}>
                 <Image source={require('../assets/images/Vectorbox.png')} resizeMode='contain' style={{ height: height * 0.7, width: width * 0.7 }} />
                  <Text>You have no Contacts yet</Text>
                 </View>
              {/* :
                  <ScrollView style={{margin:10}}>
                  {contactData.map((item,index)=>{ 
                  return(
                      <View key={item.index}>
                          <Text>{item.name}</Text>
                          <Text>{item.surname}</Text>
                          <Text>{item.number}</Text>
                      </View>
                  )
                 })}
                  </ScrollView>  
            
            }
              */}
            

            </View>
            <TouchableOpacity style={{ backgroundColor: '#00B2FF', padding: 10,margin:10, borderRadius: 30, opacity: 0.9,position:'absolute',bottom:0,right:0,flex:1,zIndex:9}} onPress={()=>navigation.navigate('Add')}>
                    <MaterialCommunityIcons name='plus' size={30} color='white' />
                </TouchableOpacity>
           
        </View>
    )
}

export default Contacts

const styles = StyleSheet.create({})