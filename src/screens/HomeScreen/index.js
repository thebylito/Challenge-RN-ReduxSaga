import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class HomeScreen extends React.Component {
  state = { screenName: 'Home' };

  componentDidMount() {}

  render() {
    const { screenName } = this.state;
    return (
      <View style={styles.container}>
        <Text>{screenName}</Text>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  title: 'Home',
};

export default HomeScreen;
