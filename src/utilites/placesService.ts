import {api, endpoints} from '../api';

const GOOGLE_PLACES_API_KEY = 'AIzaSyDRkLrHX81OD3BQoVtk-hR1tRpUH0iluR4';
export const getNearbyRestaurants = async (
  latitude: number,
  longitude: number,
) => {
  const response = await api.get(endpoints.NearbyRestaurants, {
    params: {
      location: `${latitude},${longitude}`,
      radius: 1500,
      type: 'restaurant',
      key: GOOGLE_PLACES_API_KEY,
    },
  });
  return response.data.results;
};
