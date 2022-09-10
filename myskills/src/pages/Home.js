import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Platform, TouchableOpacity } from 'react-native'
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

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
      <Button onPress={handleAddNewSkill}/>
      <Text style={[styles.title, { marginVertical: 50 }]}>
        MY SKILLS
      </Text>
      {
        mySkills.map(skill => (
          <SkillCard skill={skill}/>
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

})