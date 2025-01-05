import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const AddContact = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.add}>+</Text>
    </View>
  )
}

export default AddContact;

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'green',
        borderRadius: 10,
        position: 'absolute',
        width: 50,
        height: 50,
        bottom: 20,
        right: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    add:{
        fontSize: 30,
        color: 'white'
    }
})