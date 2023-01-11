import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';

import SearchBar from '../components/SearchBar';
import ResultList from '../components/ResultList';

import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, dataError, getData] = useResults();

  const filterByPrice = (price) => data.filter(result => result.price === price);

  return (
    <>
      <SearchBar 
        term={searchTerm} 
        onChangeTerm={term => setSearchTerm(term)}
        onSubmit={() => getData(searchTerm)}
      />
      {dataError 
        ? <Text> {dataError} </Text> 
        : null}
      <ScrollView>
        <ResultList results={filterByPrice('$')} title={'Cost Effective'}/>
        <ResultList results={filterByPrice('$$')} title={'Bit Pricier'}/>
        <ResultList results={filterByPrice('$$$')} title={'Big Spender'}/>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
});

export default SearchScreen;