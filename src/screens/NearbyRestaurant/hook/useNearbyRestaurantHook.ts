import {useState, useEffect} from 'react';
import {Location, Position, Restaurant} from '../../../models/restaurants';
import {getCurrentLocation} from '../../../utilites/locationService';
import {getNearbyRestaurants} from '../../../utilites/placesService';

const useNearbyRestaurantHook = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [allRestaurants, setAllRestaurants] = useState<Restaurant[]>([]);
  const [location, setLocation] = useState<Location | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('Popular');

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const position = (await getCurrentLocation()) as Position;
      const {latitude, longitude} = position.coords || {
        latitude: 0,
        longitude: 0,
      };

      setLocation({latitude, longitude});
      const fetchedRestaurants = await getNearbyRestaurants(
        latitude,
        longitude,
      );
      setRestaurants(fetchedRestaurants);
      setAllRestaurants(fetchedRestaurants);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  const calculateDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number,
  ): number => {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      0.5 -
      Math.cos(dLat) / 2 +
      (Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        (1 - Math.cos(dLon))) /
        2;
    return R * 2 * Math.asin(Math.sqrt(a));
  };

  const filterRestaurants = (sortedType: string) => {
    setActiveFilter(sortedType);

    if (sortedType === 'nearby' && location) {
      const sortedRestaurants = [...allRestaurants]
        .map(restaurant => ({
          ...restaurant,
          distance: calculateDistance(
            location.latitude,
            location.longitude,
            restaurant.geometry.location.lat,
            restaurant.geometry.location.lng,
          ),
        }))
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 10);

      setRestaurants(sortedRestaurants);
    } else if (sortedType === 'topRated') {
      const topRatedRestaurants = [...allRestaurants]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 10);

      setRestaurants(topRatedRestaurants);
    } else {
      setRestaurants(allRestaurants);
    }
  };

  return {
    restaurants,
    location,
    loading,
    error,
    fetchRestaurants,
    activeFilter,
    filterRestaurants,
    calculateDistance,
  };
};

export default useNearbyRestaurantHook;
