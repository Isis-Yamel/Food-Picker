import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultCard = ({result}) => {
  return (
    <View style={styles.resultContainer}>
      <Image 
        style={styles.resultImage} 
        source={{uri: result.image_url}}
      />
      <Text style={styles.resultName}> {result.name} </Text>
      <Text> Rating: {result.rating} - Reviews: {result.review_count} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  resultImage: {
    borderRadius: 4,
    height: 120,
    width: 250,
    marginBottom: 5,
  },
  resultName: {
    fontWeight: 'bold',
  },
  resultContainer: {
    marginLeft: 15,
  },
});

export default ResultCard;