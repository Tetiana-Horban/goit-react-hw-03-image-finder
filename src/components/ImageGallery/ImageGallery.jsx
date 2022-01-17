import { Component } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import Button from '../Button/Button';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import fetchHits from '../../services/api';
import { ImageGalleryList, BackgroundImg } from './ImageGallery.styled';
import { toast } from 'react-toastify';
class ImageGallery extends Component {
  state = {
    images: [],
    error: null,
    status: 'idle',
    page: 1,
    showButton: false,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.seachImage;
    const nextName = this.props.seachImage;
    if (prevName !== nextName) {
      this.setState({ status: 'pending' });
      fetchHits(nextName, this.state.page)
        .then(hits => {
          if (hits.hits.length === 0) {
            toast.info('Nothing found for your request');
          }

          this.setState({
            images: hits.hits,
            status: 'resolved',
            showButton: true,
          });
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }
  changeCurrentPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, error, status } = this.state;
    if (status === 'idle') {
      return <BackgroundImg />;
    }
    if (status === 'pending') {
      return (
        <BallTriangle
          color="#3f51b5"
          height={200}
          width={200}
          wrapperStyle={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        />
      );
    }
    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }
    if (status === 'resolved') {
      return (
        <>
          <ImageGalleryList>
            {images.map(({ id, webformatURL, tags, largeImageURL }) => (
              <ImageGalleryItem
                key={id}
                id={id}
                webformatURL={webformatURL}
                tags={tags}
                largeImage={largeImageURL}
                openModal={this.props.onClick}
              />
            ))}
          </ImageGalleryList>
          {this.state.showButton && <Button />}
        </>
      );
    }
  }
}

export default ImageGallery;
