import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultCard from './ResultCard';

const ResultList = ({title, results, navigation}) => {
  return (
    <View style={styles.resultsWrapper}>
      <Text style={styles.resultTitle}> {title} </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetail')}>
              <ResultCard result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  resultsWrapper: {
    marginBottom: 15,
  }
});

export default withNavigation(ResultList);