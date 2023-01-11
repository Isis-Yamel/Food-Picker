import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onChangeTerm, onSubmit}) => {
  return (
    <View style={styles.searchWrapper}>
      <Feather name='search' style={styles.searchIcon} />
      <TextInput 
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.searchInput} 
        placeholder='Search'
        value={term}
        onChangeText={onChangeTerm}
        onEndEditing={onSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchWrapper: {
    backgroundColor: '#E0DEDE',
    height: 50,
    borderRadius: 10,
    margin: 10,
    flexDirection: 'row',
  },
  searchInput: {
    fontSize: 18,
    flex: 1,
  },
  searchIcon: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

export default SearchBar;