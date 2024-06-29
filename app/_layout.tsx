import { View, Text } from 'react-native'
import { Stack } from 'expo-router'
import { AuthContextProvider} from '@/context/authContext'


const RootLayout = () => {
  return (
    <AuthContextProvider>
      <Stack
        screenOptions={{
          headerShown: false
        
        }}>
        <Stack.Screen name="signIn"/>
        <Stack.Screen name="signUp"/>
      </Stack>
    </AuthContextProvider>
  )
}

export default RootLayout