import React from "react";
import {TouchableOpacity, Text, View, StyleSheet, TouchableOpacityProps} from 'react-native';

interface buttonProps extends TouchableOpacityProps{
  title: string
}

export function Button({title,...rest} : buttonProps){
  return(
    <TouchableOpacity
    style={styles.button}
    
    {...rest}
  >
    <Text style={styles.buttontext}>
      {title}
    </Text>
  </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttontext: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold'
  },
})