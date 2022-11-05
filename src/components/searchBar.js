import {useState} from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
const search = require('../utils/images/search.png');
const clear = require('../utils/images/cross.png');
const SearchBar = ({updateSearch}) => {
  const [query, setQuery] = useState();
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchIcon}>
        <Image source={search} style={styles.search} />
      </View>
      <TextInput
        value={query}
        keyboardType="default"
        onChangeText={text => {
          setQuery(text);
          updateSearch(text);
        }}
        style={styles.searchInput}
        placeholder="Search here..."
      />

      {query ? (
        <TouchableOpacity
          onPress={() => setQuery('')}
          style={styles.clearContainer}>
          <Image source={clear} style={styles.clear} />
        </TouchableOpacity>
      ) : (
        <View style={styles.clearContainer} />
      )}
    </View>
  );
};
export default SearchBar;

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    borderRadius: 30,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    position: 'relative',
  },
  searchIcon: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 7,
  },
  searchInput: {
    padding: 12,
  },
  search: {
    width: 30,
    height: 30,
  },
  clear: {
    width: 20,
    height: 20,
  },
  clearContainer: {
    justifyContent: 'center',
    marginHorizontal: 110,
    alignItems: 'center',
  },
});
