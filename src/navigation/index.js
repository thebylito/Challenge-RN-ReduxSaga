import { createStackNavigator } from 'react-navigation';
import { FluidNavigator } from 'react-navigation-fluid-transitions';

// Pages
import HomeScreen from '../screens/HomeScreen';
import ListScreen from '../screens/ComprasScreen';
import DetailsScreen from '../screens/DetailsScreen';

const AppRoutes = createStackNavigator({
  homeScreen: { screen: HomeScreen },
  listScreen: { screen: ListScreen },
  detailsScreen: { screen: DetailsScreen },
});

export default AppRoutes;
