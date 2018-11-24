import { StyleSheet } from 'react-native';
import GlobalStyle from '../../utils/style';
import Colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    width: '100%',
    backgroundColor: Colors.WHITE,
    padding: 10,
  },
  containerTitle: {
    fontSize: GlobalStyle.FONT_SIZE_TITLE,
    marginVertical: 10,
  },
  featuredBooks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
