import React from "react";
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';

export function Button(){
  return(
    <TouchableOpacity
    style={styles.button}
    activeOpacity={0.7}
    // onPress={handleAddNewSkill}
  >
    <Text styles={styles.buttontext}>add</Text>
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