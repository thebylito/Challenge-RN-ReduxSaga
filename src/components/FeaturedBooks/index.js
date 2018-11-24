import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Book from '../Books';

const FeaturedBooks = (props) => (
  <View style={styles.container}>
    <Text style={styles.containerTitle}>Top Rated</Text>
    <View style={styles.featuredBooks}>
      <Book ready={false} />
      <Book ready={false} />
      <Book ready={false} />
    </View>
  </View>
);

export default FeaturedBooks;
