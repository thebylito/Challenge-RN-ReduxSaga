import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as BooksCreators } from '../../store/ducks/books';

import styles from './styles';

class DetailsScreen extends React.Component {
  state = { screenName: 'Details' };

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

DetailsScreen.navigationOptions = {
  title: 'Details',
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(BooksCreators, dispatch);

const mapStateToProps = ({ books }) => {
  const { data } = books;
  return { data };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailsScreen);
