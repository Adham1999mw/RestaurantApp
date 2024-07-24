import React from 'react';
import {View, Image, Pressable} from 'react-native';
import {useTheme} from '../../theme/ThemeContext';
import {styles} from './Styles';
import IMAGES from '../../assets/images';
import AppText from '../common/AppText';

const Header: React.FC = () => {
  const {theme, isDarkMode, setIsDarkMode} = useTheme();

  const toggleSwitch = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Image
        source={IMAGES.pendingAction_dark_mode}
        style={[styles.emptyStatusImage, {opacity: 0}]}
      />
      <AppText fontSize="large" fontWeight="medium">
        Nearby Restaurants
      </AppText>
      <Pressable onPress={toggleSwitch}>
        <Image
          source={
            !isDarkMode
              ? IMAGES.pendingAction_dark_mode
              : IMAGES.pendingAction_leight_mode
          }
          style={styles.emptyStatusImage}
        />
      </Pressable>
    </View>
  );
};

export default Header;
