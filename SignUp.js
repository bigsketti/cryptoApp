import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export const SignUp = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.signUpText}>Sign Up</Text>
      <TextInput placeholder="Username" style={styles.input} />
      <TextInput placeholder='Email Address' style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry={true} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#212120',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    color: '#f6ff00',
    fontSize: 40,
    marginBottom: 20, 
  },
  input: {
    width: '80%', 
    backgroundColor: 'white', 
    paddingHorizontal: 15,
    paddingVertical: 15, 
    marginBottom: 10, 
    borderRadius: 5, 
  },
  button: {
    width: '80%',
    backgroundColor: 'white', 
    borderColor: '#000000',
    borderWidth: 1, 
    paddingHorizontal: 15,
    paddingVertical: 10, 
    marginBottom: 10,
    borderRadius: 5,
    color: '#ffffff', 
    textAlign: 'center', 
  },
  buttonText: {
    color: '#000000', 
    textAlign: 'center',
  },
});
