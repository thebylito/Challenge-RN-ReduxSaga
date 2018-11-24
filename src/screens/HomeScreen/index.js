import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Colors from '../../utils/colors';
import GlobalStyle from '../../utils/style';
import Book from '../../components/Books';
import FeaturedBooks from '../../components/FeaturedBooks';

class HomeScreen extends React.Component {
  state = { screenName: 'Home' };

  render() {
    return (
      <View style={styles.container}>
        <FeaturedBooks />
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  title: 'Home',
  headerStyle: {
    backgroundColor: Colors.WHITE,
  },
};

export default HomeScreen;
