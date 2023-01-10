import React, { useState } from 'react';
import { View, Text } from 'react-native';

import SearchBar from '../components/SearchBar';
import ResultList from '../components/ResultList';

import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, dataError, getData] = useResults();

  return (
    <View>
      <SearchBar 
        term={searchTerm} 
        onChangeTerm={term => setSearchTerm(term)}
        onSubmit={() => getData(searchTerm)}
      />
      {dataError 
        ? <Text> {dataError} </Text> 
        : null}
      <Text> You get {data.length} results </Text>
      <ResultList title={'Expensive'}/>
      <ResultList title={'Normi'}/>
      <ResultList title={'Cheap'}/>
    </View>
  );
};

export default SearchScreen;