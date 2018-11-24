import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FeaturedBooksCreators } from '../../store/ducks/featuredBooks';
import FeaturedBooks from '../../components/FeaturedBooks';
import Colors from '../../utils/colors';
import styles from './styles';

class HomeScreen extends React.Component {
  componentDidMount() {
    this.getInitialData();
  }

  getInitialData = () => {
    this.props.getFeaturedBooksRequest();
  };

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

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(FeaturedBooksCreators, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(HomeScreen);
