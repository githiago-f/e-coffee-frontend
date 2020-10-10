import React from 'react';
import Theme from './theme';
import { BaseRoutes } from 'router';

const App = () => {
  return (
    <React.StrictMode>
      <Theme>
        <BaseRoutes />
      </Theme>
    </React.StrictMode>
  );
};

export default App;
