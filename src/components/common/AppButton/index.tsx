import {TouchableOpacity, ViewStyle} from 'react-native';
import AppText from '../AppText';
import {styles} from './Styles';
import {useTheme} from '../../../theme/ThemeContext';

interface AppButtonProps {
  onPress: () => void;
  title: string;
  style?: ViewStyle;
}

const AppButton = ({onPress, title, style}: AppButtonProps) => {
  const {theme} = useTheme();

  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: theme.card}, style]}
      onPress={onPress}>
      <AppText fontSize="medium" fontWeight="medium">
        {title}
      </AppText>
    </TouchableOpacity>
  );
};

export default AppButton;
