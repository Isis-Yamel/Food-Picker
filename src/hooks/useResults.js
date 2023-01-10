import React, { useState, useEffect } from 'react';
import yelp from '../apis/yelp';

export default () => {
  const [data, setData] = useState([]);
  const [dataError, setDataError] = useState('');

  const getData = async (term) => {
    try {
      const result = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          location: 'san jose',
        }
      });

      setData(result.data.businesses);
      setDataError('');

    } catch (error) {
      setDataError('Something went wrong');
    }
  };

  useEffect(() => {
    getData('pasta');
  }, []);

  return [data, dataError, getData];
};