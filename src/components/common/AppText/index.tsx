import React from 'react';
import {Text, TextProps, StyleSheet, TextStyle} from 'react-native';
import {useTheme} from '../../../theme/ThemeContext';

interface AppTextProps extends TextProps {
  fontWeight?: 'small' | 'medium' | 'large';
  fontSize?: 'small' | 'medium' | 'large';
}

const fontWeightMapping: {
  [key in NonNullable<AppTextProps['fontWeight']>]: TextStyle['fontWeight'];
} = {
  small: '300',
  medium: '500',
  large: '700',
};

const fontSizeMapping: {
  [key in NonNullable<AppTextProps['fontSize']>]: number;
} = {
  small: 12,
  medium: 16,
  large: 20,
};

const AppText: React.FC<AppTextProps> = ({
  fontWeight = 'medium',
  fontSize = 'medium',
  style,
  ...props
}) => {
  const {theme} = useTheme();

  const combinedStyle = StyleSheet.flatten([
    {
      fontWeight: fontWeightMapping[fontWeight],
      fontSize: fontSizeMapping[fontSize],
      color: theme.text,
    },
    style,
  ]);

  return (
    <Text style={combinedStyle} {...props}>
      {props.children}
    </Text>
  );
};

export default AppText;
