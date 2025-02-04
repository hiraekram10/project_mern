import React from 'react'
import { View,Text,Button, TextInput, StyleSheet } from 'react-native'

const FakeData = ({navigation}) => {
  return (
    <View>
        <Text>
            fake Data show hona hai abhi
        </Text>
        <TextInput placeholder='enter username'></TextInput>
        <Button title='send' onPress={()=>navigation.navigate('Home')}></Button>
       

    </View>
  )
}

export default FakeData



