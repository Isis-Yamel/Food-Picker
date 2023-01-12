import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../apis/yelp';

const FALLBACK_IMAGE = 'https://media-cdn.tripadvisor.com/media/photo-s/17/75/3f/d1/restaurant-in-valkenswaard.jpg';
// const EMPTY_GALLERY = 'https://i.pinimg.com/236x/be/0a/f7/be0af72fc54396baa8e3e91781372db4.jpg';

const RestaurantDetailScreen = ({ navigation }) => {
  const [restaurant, setRestaurant] = useState(null);
  const id = navigation.getParam('id');

  const getRestaurantInfo = async (id) => {
    const response = await yelp.get(`/${id}`);
    setRestaurant(response.data);
  };

  useEffect(() => {
    getRestaurantInfo(id)
  }, []);

  if (!restaurant) {
    return <Text>There is no information yet, hold on</Text>
  }

  return (
    <>
      <Text style={styles.detailName}> 
        {restaurant.name} 
      </Text>
      <FlatList
        data={restaurant.photos}
        keyExtractor={(id) => id}
        renderItem={({ item }) => {
          return (
            <Image style={styles.detailImage} source={{uri: item || FALLBACK_IMAGE}} />
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  detailName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  detailImage: {
    width: 300,
    height: 150,
    margin: 20,
    borderRadius: 10,
  },
  emptyGallery: {
    width: 300,
    height: 500,
    margin: 20,
    borderRadius: 10,
  }
});

export default RestaurantDetailScreen;