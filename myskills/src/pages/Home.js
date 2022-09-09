import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Platform, TouchableOpacity } from 'react-native'

export default function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
   setMySkills(oldState => [...oldState, newSkill]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ricardo Girardi</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite aqui"
        placeholderTextColor='#555'
        onChangeText={setNewSkill}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleAddNewSkill}
      >
        <Text styles={styles.buttontext}>add</Text>
      </TouchableOpacity>
      <Text style={[styles.title, { marginVertical: 50 }]}>
        MY SKILLS
      </Text>
      {
        mySkills.map(skill => (
          <TouchableOpacity key={skill} style={styles.buttonskill}>
            <Text style={styles.textskill}>
              {skill}
            </Text>
          </TouchableOpacity>
        ))}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 70,
    paddingHorizontal: 30,
    backgroundColor: '#121015'
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#fff',
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 7
  },
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