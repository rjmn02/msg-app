import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Link } from 'expo-router'

const SignUpScreen = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput 
        placeholder="Username"
        style={styles.textForm}  />

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
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Sign Up</Text>
      </TouchableOpacity>
      
      <TouchableOpacity>
        <Link href='signIn' style={{fontSize: 14, color: 'mediumpurple'}}>Back to Sign in</Link>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  passwordContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    paddingRight: 10,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  textForm: {
    width: 330,
    height: 60,
    fontSize: 18,
    backgroundColor: 'lightgrey',
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


export default SignUpScreen