import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import { Button } from '../../components'
import auth from '@react-native-firebase/auth';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button
        onPress={signout}
        title='Sign Out'
        wrapperStyle={styles.button} />
    </View>
  )
}

const signout = () => {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
  return null;
}

export default HomeScreen