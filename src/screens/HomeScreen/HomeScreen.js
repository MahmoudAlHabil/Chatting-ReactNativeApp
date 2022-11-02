import {View, Image, Text} from 'react-native';
import React from 'react';
import styles from './styles';
const img = require('../../utils/images/girl.jpg');

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={img} style={styles.ImgHeader} />
        <Text>Chat</Text>
      </View>
    </View>
  );
};

export default HomeScreen;
