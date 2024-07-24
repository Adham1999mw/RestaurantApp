import React, {ReactNode} from 'react';
import {View} from 'react-native';
import Header from '../Header';
import {styles} from './Styles';
import {useTheme} from '../../theme/ThemeContext';

interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({children}: any) => {
  const {theme} = useTheme();

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Header />
      <View style={styles.content}>{children}</View>
    </View>
  );
};

export default Layout;
