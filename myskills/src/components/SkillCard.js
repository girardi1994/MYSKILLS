import React from "react";
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native'


export function SkillCard({skill}){
  return(
    <TouchableOpacity style={styles.buttonskill}>
    <Text style={styles.textskill}>
      {skill}
    </Text>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonskill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10,
  },
  textskill: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
})