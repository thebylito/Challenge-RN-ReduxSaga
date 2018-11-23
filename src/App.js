import React from 'react';
import { Provider } from 'react-redux';
import Routes from './navigation';
import reduxStore from './store/';
import NavigationService from './navigation/NavigationService';

const App = () => (
  <Provider store={store}>
    <Routes
      ref={(navigatorRef) =>
        NavigationService.setTopLevelNavigator(navigatorRef)
      }
    />
  </Provider>
);

export default App;
