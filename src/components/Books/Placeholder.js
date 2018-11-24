import React from 'react';
import { View } from 'react-native';
import Placeholder from 'rn-placeholder';

const customPlaceholder = (props) => {
  const style = {
    backgroundColor: props.bgColor,
    width: props.width,
    height: props.height,
  };
  return <View style={style} />;
};

export default Placeholder.connect(customPlaceholder);
