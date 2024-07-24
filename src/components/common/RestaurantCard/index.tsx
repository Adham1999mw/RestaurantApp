import React from 'react';
import {View, Image, TouchableOpacity, Linking} from 'react-native';
import AppText from '../AppText';
import IMAGES from '../../../assets/images';
import {createStyles} from './Styles';
import {Restaurant} from '../../../models/restaurants';
import {useTheme} from '../../../theme/ThemeContext';

interface RestaurantCardProps {
  restaurant: Restaurant;
  distance: number;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurant,
  distance,
}) => {
  const {theme} = useTheme();
  const styles = createStyles(theme);

  const openInGoogleMaps = () => {
    if (restaurant.geometry && restaurant.geometry.location) {
      const {lat, lng} = restaurant.geometry.location;
      const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
      Linking.openURL(url).catch(err =>
        console.error('An error occurred', err),
      );
    }
  };

  const imageUrl =
    restaurant?.photos && restaurant.photos.length > 0
      ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=450&photoreference=${restaurant.photos[0].photo_reference}&key=AIzaSyDRkLrHX81OD3BQoVtk-hR1tRpUH0iluR4`
      : 'https://via.placeholder.com/350';

  return (
    <TouchableOpacity onPress={openInGoogleMaps} activeOpacity={0.8}>
      <View style={[styles.card, {backgroundColor: theme.card}]}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: imageUrl}}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        <View style={styles.content}>
          <AppText fontWeight="large" fontSize="medium" style={styles.title}>
            {restaurant.name}
          </AppText>
          <View style={styles.infoRow}>
            <Image
              source={IMAGES.pendingAction_restauran}
              style={styles.emptyStatusImage}
            />
            <AppText
              fontWeight="medium"
              fontSize="small"
              style={styles.infoText}>
              {restaurant.types[1]}
            </AppText>
          </View>

          <View style={styles.infoRow}>
            <Image
              source={IMAGES.pendingAction_near_me}
              style={styles.emptyStatusImage}
            />
            <AppText
              fontWeight="medium"
              fontSize="small"
              style={styles.infoText}>
              {restaurant.vicinity}
            </AppText>
          </View>
          <View style={styles.infoRow}>
            <Image
              source={IMAGES.pendingAction_favourite}
              style={styles.emptyStatusImage}
            />
            <AppText
              fontWeight="medium"
              fontSize="small"
              style={styles.infoText}>
              {restaurant.rating} / 5
            </AppText>
          </View>
          <View style={styles.infoRow}>
            <Image
              source={IMAGES.pendingAction_emptyStatus}
              style={styles.emptyStatusImage}
            />
            <AppText
              fontWeight="medium"
              fontSize="small"
              style={styles.infoText}>
              {distance.toFixed(2)} K.M
            </AppText>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
