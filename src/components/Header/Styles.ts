import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: moderateScale(15),
    height: moderateScale(100),
  },
  emptyStatusImage: {
    width: moderateScale(21),
    height: moderateScale(21),
    resizeMode: 'contain',
    marginBottom: moderateScale(1.6),
  },
});
