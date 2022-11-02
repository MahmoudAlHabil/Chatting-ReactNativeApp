import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import AppContainer from './src/navigations';
import { colors } from './src/utils';

const App = () => {

  return (
      <SafeAreaView style={styles.container}>
        <AppContainer />
        <StatusBar barStyle="dark-content" backgroundColor={colors.common.white} />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App