import React from 'react';
import AppContainer from './src/navigations';
import { StatusBar, StyleSheet, View } from 'react-native';
import { colors } from './src/utils';


const App = () => {
  return (
    <View style={styles.container}>
      <AppContainer />
      <StatusBar barStyle="dark-content" backgroundColor={colors.common.white} />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});