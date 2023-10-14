import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { mockDatabase } from './App';
import { useNavigation } from '@react-navigation/native';

export const SignIn = () => {

  const navigation = useNavigation();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigateToHomePage = () => navigation.navigate('Home Page')

    const handleUserAuth = () => {
    
        const user = mockDatabase[0].users.find(user => user.username === username && user.password === password);
    
        if (user) {
            console.log('Authentication Complete');
          navigateToHomePage();
        } else {
          console.error('Authentication failed', username, password);

        }
      };

  return (
    <View style={styles.mainView}>
      <Text style={styles.signInText}>Sign In</Text>
      <TextInput placeholder="Username" style={styles.input} onChangeText={text => setUsername(text)} value={username} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry={true} onChangeText={text => setPassword(text)} value={password} />
      <TouchableOpacity style={styles.button} onPress={handleUserAuth}>
        <Text style={styles.buttonText}>Sign In</Text>
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
  signInText: {
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
