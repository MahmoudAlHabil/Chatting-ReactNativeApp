import {
  View,
  Image,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import FlatListChat from '../../components/FlatList';
import SearchBar from '../../components/searchBar';
const img = require('../../utils/images/girl.jpg');

const HomeScreen = () => {
  const [text, setText] = useState();
  function updateSearch(text) {
    console.log(text);
  }
  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={img} style={styles.ImgHeader} />
        <Text style={styles.txtHeader}>chat</Text>
      </View>
      <SearchBar value={text} updateSearch={updateSearch} />
      <FlatListChat />
    </View>
    // </TouchableWithoutFeedback>
  );
};

export default HomeScreen;
