import React, {useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import RestaurantCard from '../../components/common/RestaurantCard';
import {styles} from './styles';
import useNearbyRestaurantHook from './hook/useNearbyRestaurantHook';
import AppButton from '../../components/common/AppButton';
import {useTheme} from '../../theme/ThemeContext';

const NearbyRestaurants: React.FC = () => {
  const {
    fetchRestaurants,
    restaurants,
    location,
    loading,
    error,
    activeFilter,
    filterRestaurants,
    calculateDistance,
  } = useNearbyRestaurantHook();

  const {theme} = useTheme();

  useEffect(() => {
    fetchRestaurants();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <ActivityIndicator size="large" color="#0000ff" style={styles.centered} />
    );
  }

  if (error) {
    return <Text style={styles.error}>Error: {error.message}</Text>;
  }

  if (!location) {
    return <Text style={styles.info}>Location not available</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <AppButton
          style={
            activeFilter === 'Popular' ? {backgroundColor: theme.active} : {}
          }
          title="Popular"
          onPress={() => filterRestaurants('Popular')}
        />
        <AppButton
          style={
            activeFilter === 'nearby' ? {backgroundColor: theme.active} : {}
          }
          title="Nearby"
          onPress={() => filterRestaurants('nearby')}
        />
        <AppButton
          style={
            activeFilter === 'topRated' ? {backgroundColor: theme.active} : {}
          }
          title="Top Rated"
          onPress={() => filterRestaurants('topRated')}
        />
      </View>
      <FlatList
        data={restaurants}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          const distance = calculateDistance(
            location.latitude,
            location.longitude,
            item.geometry.location.lat,
            item.geometry.location.lng,
          );

          return <RestaurantCard restaurant={item} distance={distance} />;
        }}
        keyExtractor={item => item.place_id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default NearbyRestaurants;
