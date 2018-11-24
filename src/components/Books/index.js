import React from 'react';
import { View, Text } from 'react-native';
import Placeholder from 'rn-placeholder';
import GlobalStyle from '../../utils/style';

const bookWidth = GlobalStyle.DEVICE_WIDTH / 3 - 10;

const customPlaceholder = (props) => {
  const style = { backgroundColor: props.bgColor };

  return (
    <View
      style={[
        {
          ...style,
        },
        {
          width: bookWidth,
          height: bookWidth * 1.3,
        },
      ]}
    />
  );
};

const PlaceholderC = Placeholder.connect(customPlaceholder);

// import styles from './styles';

const Book = ({ ready }) => (
  <View>
    <PlaceholderC animate="fade" onReady={ready} bgColor="#cccccc">
      <Text>Placeholder has finished :D</Text>
    </PlaceholderC>
  </View>
);

export default Book;
