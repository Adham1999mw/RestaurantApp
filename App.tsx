// App.tsx

import React from 'react';
import NearbyRestaurant from './src/screens/NearbyRestaurant';
import Layout from './src/components/Layout';
import {ThemeProvider} from './src/theme/ThemeContext';

const AppContent: React.FC = () => {
  return (
    <Layout>
      <NearbyRestaurant />
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
