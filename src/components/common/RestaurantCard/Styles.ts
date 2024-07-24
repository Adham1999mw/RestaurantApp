import {StyleSheet} from 'react-native';
import {Theme} from '../../../theme/themes';
import {moderateScale} from 'react-native-size-matters';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    card: {
      flexDirection: 'row',
      borderRadius: moderateScale(8),
      overflow: 'hidden',
      marginVertical: moderateScale(8),
      borderColor: theme.card,
      paddingVertical: moderateScale(10),
    },
    imageContainer: {
      flex: 2,
      height: moderateScale(100),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: '75%',
      height: '80%',
      borderRadius: moderateScale(10),
    },
    content: {
      flex: 3,
      justifyContent: 'center',
    },
    title: {
      marginBottom: moderateScale(8),
      color: theme.text,
    },
    infoRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: moderateScale(8),
      gap: moderateScale(4),
      paddingRight: moderateScale(20),
    },
    icon: {
      marginRight: moderateScale(8),
    },
    infoText: {
      color: theme.text,
    },
    emptyStatusImage: {
      width: moderateScale(12),
      height: moderateScale(12),
      resizeMode: 'contain',
    },
  });
