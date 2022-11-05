import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const data = [
  {
    id: 1,
    name: 'hadeel',
    img: require('../utils/images/girl.jpg'),
    icon: <AntDesign name="checkcircle" />,
  },
  {
    id: 2,
    name: 'Amany',
    img: require('../utils/images/girl.jpg'),
    icon: <AntDesign name="checkcircle" />,
  },
  {
    id: 3,
    name: 'Ayman',
    img: require('../utils/images/girl.jpg'),
    icon: <AntDesign name="checkcircle" />,
  },
  {
    id: 4,
    name: 'Reem',
    img: require('../utils/images/girl.jpg'),
    icon: <AntDesign name="checkcircle" />,
  },
  {
    id: 5,
    name: 'yazan',
    img: require('../utils/images/girl.jpg'),
    icon: <AntDesign name="checkcircle" />,
  },
  {
    id: 6,
    name: 'Ayman',
    img: require('../utils/images/girl.jpg'),
    icon: <AntDesign name="checkcircle" />,
  },
  {
    id: 7,
    name: 'Reem',
    img: require('../utils/images/girl.jpg'),
    icon: <AntDesign name="checkcircle" />,
  },
  {
    id: 8,
    name: 'yazan',
    img: require('../utils/images/girl.jpg'),
    icon: <AntDesign name="checkcircle" />,
  },
  {
    id: 9,
    name: 'Ayman',
    img: require('../utils/images/girl.jpg'),
    icon: <AntDesign name="checkcircle" />,
  },
  {
    id: 10,
    name: 'Reem',
    img: require('../utils/images/girl.jpg'),
    icon: <AntDesign name="checkcircle" />,
  },
  {
    id: 11,
    name: 'yazan',
    img: require('../utils/images/girl.jpg'),
    icon: <AntDesign name="checkcircle" />,
  },
  {
    id: 12,
    name: 'yazan',
    img: require('../utils/images/girl.jpg'),
    icon: <AntDesign name="checkcircle" />,
  },
  {
    id: 13,
    name: 'yazan',
    img: require('../utils/images/girl.jpg'),
    icon: <AntDesign name="checkcircle" />,
  },
];
const renderItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={item.img} style={styles.img} />
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <View style={styles.checkContainer}>{item.icon}</View>
    </View>
  );
};

const FlatListChat = () => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      style={styles.flatList}
      showsVerticalScrollIndicator={false}
    />
  );
};
export default FlatListChat;

const styles = StyleSheet.create({
  flatList: {
    marginVertical: 15,
    // backgroundColor: 'red',
    padding: 15,
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderColor: 'blue',
    marginVertical: 10,
    borderWidth: 2,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    paddingHorizontal: 20,
  },
  checkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  separetor: {
    width: '90%',
    height: 1,
    backgroundColor: '#aaa',
  },
});
