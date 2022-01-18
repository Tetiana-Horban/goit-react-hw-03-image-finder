import { React, Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './components/Loader/Loader';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import fetchHits from './services/api';
import { BackgroundImg } from './components/ImageGallery/ImageGallery.styled';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { AppWrapper } from './GlobalStyle';

class App extends Component {
  state = {
    images: [],
    seachImage: '',
    showModal: false,
    largeImage: '',
    error: null,
    status: 'idle',
    page: 1,
  };
  handleFormSubmit = seachImage => {
    this.setState({ seachImage, images: [], page: 1 });
  };
  clickOnGalleryImg = largeImageURL => {
    this.setState({ largeImage: largeImageURL, showModal: true });
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.seachImage;
    const nextName = this.state.seachImage;
    if (prevName !== nextName) {
      this.setState({ status: 'pending' });
      this.getImages();
    }
  }
  getImages = () => {
    const { seachImage, page } = this.state;
    fetchHits(seachImage, page)
      .then(hits => {
        if (hits.hits.length === 0) {
          toast.info('Nothing found for your request');
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...hits.hits],
          status: 'resolved',
        }));
      })
      .catch(error => this.setState({ error, status: 'rejected' }));
  };
  changePage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  render() {
    const { images, showModal, largeImage, status, error, seachImage } =
      this.state;
    return (
      <AppWrapper>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {status === 'idle' && <BackgroundImg />}
        {status === 'pending' && <Loader />}
        {status === 'rejected' && <h1>{error.message}</h1>}
        {status === 'resolved' && (
          <ImageGallery images={images} openModal={this.clickOnGalleryImg} />
        )}
        {images.length > 0 && (
          <Button onClick={this.changePage} loadMore={this.getImages} />
        )}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImage} alt={seachImage} />
          </Modal>
        )}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </AppWrapper>
    );
  }
}

export default App;
