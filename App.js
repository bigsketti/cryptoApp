import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignUp } from './SignUp';
import { SignIn } from './SignIn';
import { HomePage } from './HomePage';

const Stack = createNativeStackNavigator();

export const mockDatabase = [
  { users: [{
   username: 'admin',
   email: null,
   password: 'root',
  }],
   }
];

const WelcomeScreen = () => {

  const navigation = useNavigation();

  const navigateToSignUp = () => {
    navigation.navigate('Sign Up');
  };
  const navigateToSignIn = () => {
    navigation.navigate('Sign In');
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#212120',
    },
    centeredContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#ffffff',
      paddingVertical: 20,  
      paddingHorizontal: 40, 
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#000000',
      marginVertical: 10,
    },
    buttonText: {
      color: '#000000', 
    },
    buttonContainer: {
    },
    text: {
      flex: 4,
      fontSize: 40,
      color: '#f6ff00',
      padding: 15,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Crypto Tracker</Text>
        <View style={styles.centeredContent}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={navigateToSignUp}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
          <View style={styles.centeredContent} >
            <View style={styles.buttonContainer}>
               <TouchableOpacity style={styles.button} onPress={navigateToSignIn}>
                  <Text style={styles.buttonText}>Sign In</Text>
               </TouchableOpacity>
            </View>
          </View>
    </View>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='Welcome' 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1a1a19',
        },
        headerTitleStyle: {
          color: '#f6ff00',
        },
      }}
      >
        <Stack.Screen name='Welcome' component={WelcomeScreen} />
        <Stack.Screen name='Sign Up' component={SignUp} />
        <Stack.Screen name='Sign In' component={SignIn} />
        <Stack.Screen name='Home Page' component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
