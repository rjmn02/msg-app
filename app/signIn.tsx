import { View, Text, TextInput, StyleSheet, TouchableOpacity, Touchable } from 'react-native'
import React, { useState } from 'react'
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { Link } from 'expo-router';


const SignInScreen = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Sign In</Text>

      <TextInput 
        placeholder="Email"
        style={styles.textForm}  />

      <View style={styles.passwordContainer}>
        <TextInput 
          placeholder="Password"
          secureTextEntry={isVisible}
          style={styles.textForm} />

        <TouchableOpacity>
          <MaterialCommunityIcons 
            name= {(!isVisible)? 'eye': 'eye-off'} 
            size={22}
            onPress={() => setIsVisible(!isVisible)}
            />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Sign In</Text>
      </TouchableOpacity>

      <Text style = {styles.text}>
        Dont have an account?
        <TouchableOpacity>
          <Link href='/signUp' style={{color: 'mediumpurple'}}> Sign Up</Link>
        </TouchableOpacity>
      </Text>

    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },

  passwordContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'darkgrey',
    borderRadius: 10,
    paddingRight: 10,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    backgroundColor: 'black'
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white'
  },
  textForm: {
    width: 330,
    height: 60,
    fontSize: 18,
    backgroundColor: 'darkgrey',
    borderRadius: 10,
    padding: 10
  },
  
  button: {
    width: 200,
    height: 50,
    backgroundColor: 'mediumpurple',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  }
})


export default SignInScreen