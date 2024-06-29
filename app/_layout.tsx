import { View, Text } from 'react-native'
import { Stack } from 'expo-router'


const RootLayout = () => {

  return (
    <Stack
      screenOptions={{
        headerShown: false
      
      }}>
      <Stack.Screen name="signIn"/>
      <Stack.Screen name="signUp"/>
    </Stack>
  )
}

export default RootLayout