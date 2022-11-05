import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreateAccountScreen, ForgotPasswordScreen, LoginScreen } from '../../screens';
import HomeStack from './HomeStack';

const Stack = createNativeStackNavigator();

const AuthStack = () => {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen}/>
      <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen} />
      <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
      <Stack.Screen name="HomeStack" component={HomeStack} />
    </Stack.Navigator>
  );
}

export default AuthStack;