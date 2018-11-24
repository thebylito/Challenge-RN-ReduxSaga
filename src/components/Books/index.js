import React from 'react';
import { Image } from 'react-native';
import Placeholder from './Placeholder';
import GlobalStyle from '../../utils/style';

const bookWidth = GlobalStyle.DEVICE_WIDTH / 3 - 10;
const bookHeight = bookWidth * 1.3;

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }
  componentDidMount() {
    const { book } = this.props;
    if (book) {
      this.prefetchImage(book.volumeInfo.imageLinks.thumbnail);
    }
  }

  prefetchImage = async (url) => {
    await Image.prefetch(url);
    this.setState({ loaded: true });
  };

  render() {
    const { book } = this.props;
    const { loaded } = this.state;
    return (
      <Placeholder
        animate="fade"
        onReady={loaded}
        bgColor="#cccccc"
        width={bookWidth}
        height={bookHeight}
      >
        <React.Fragment>
          {loaded && (
            <Image
              source={{ uri: book.volumeInfo.imageLinks.thumbnail }}
              resizeMode="contain"
              style={{
                width: bookWidth,
                height: bookHeight,
              }}
            />
          )}
        </React.Fragment>
      </Placeholder>
    );
  }
}

export default Book;
