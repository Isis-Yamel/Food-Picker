import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer DTVY9_0c88H6ZiaxJtl4TWOq8hpZo72ADA8pSLKeBEvBRbbfrN7cdlfJHjXem5WoBJ5H3KgWginHM2DLiMuRQ-r44uuZKSGz-L_plMtuMa8i3wil_8YBzQUwL8O9Y3Yx'
  },
});
