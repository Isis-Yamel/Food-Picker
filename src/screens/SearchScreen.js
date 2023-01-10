import React, { useState } from 'react';
import { View, Text } from 'react-native';

import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <View>
      <SearchBar 
        term={searchTerm} 
        onChangeTerm={term => setSearchTerm(term)}
        onSubmit={() => console.log('END')}
      />
      <Text>Search</Text>
    </View>
  );
};

export default SearchScreen;