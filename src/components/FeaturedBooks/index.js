import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import Book from '../Books';

const FeaturedBooks = ({ data, loading }) => (
  <View style={styles.container}>
    <Text style={styles.containerTitle}>Featured books</Text>
    <View style={styles.featuredBooks}>
      {loading ? (
        <React.Fragment>
          <Book />
          <Book />
          <Book />
        </React.Fragment>
      ) : (
        <React.Fragment>
          {data &&
            data.map((book) => <Book ready={true} book={book} key={book.id} />)}
        </React.Fragment>
      )}
    </View>
  </View>
);

const mapStateToProps = ({ featuredBooks }) => {
  const { data, loading } = featuredBooks;
  return { data, loading };
};

export default connect(
  mapStateToProps,
  null,
)(FeaturedBooks);
