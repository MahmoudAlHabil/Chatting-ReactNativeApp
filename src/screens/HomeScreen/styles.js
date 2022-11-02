import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  headerContainer: {
    width: '90%',
    backgroundColor: 'green',
    alignSelf: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  ImgHeader: {
    width: 50,
    height: 50,
    borderRadius: 100,
    // resizeMode:'contain'
  },
});
export default styles;
