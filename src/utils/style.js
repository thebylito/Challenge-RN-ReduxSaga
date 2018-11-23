import { Dimensions } from 'react-native';

// Precalculate Device Dimensions for better performance
const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;

// Calculating ratio from iPhone breakpoints
const ratioX = x < 375 ? (x < 320 ? 0.75 : 0.875) : 1; // eslint-disable-line no-nested-ternary
const ratioY = y < 568 ? (y < 480 ? 0.75 : 0.875) : 1; // eslint-disable-line no-nested-ternary

// We set our base font size value
const baseUnit = 16;

// We're simulating EM by changing font size according to Ratio
const unit = baseUnit * ratioX;

// We add an em() shortcut function
function em(value) {
  return unit * value;
}
const pageStyle = {
  flex: 1,
  backgroundColor: '#1D2044',
  padding: em(1.25),
};

// Then we set our styles with the help of the em() function
const Style = {
  // GENERAL
  DEVICE_WIDTH: x,
  DEVICE_HEIGHT: y,
  RATIO_X: ratioX,
  RATIO_Y: ratioY,
  UNIT: em(1),
  PADDING: em(1.25),

  // CARD
  CARD_WIDTH: x - em(1.25) * 2, // eslint-disable-line no-mixed-operators
  CARD_HEIGHT: (x - em(1.25) * 2) * (3 / 5), // eslint-disable-line no-mixed-operators
  CARD_PADDING_X: em(1.875),
  CARD_PADDING_Y: em(1.25),

  // FONT
  FONT_SIZE: em(1),
  FONT_SIZE_SMALLER: em(0.75),
  FONT_SIZE_SMALL: em(0.875),
  FONT_SIZE_TITLE: em(1.25),
  PAGE_STYLE: pageStyle,
};

export default Style;
