import { React, Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from './components/Modal/Modal';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { AppWrapper } from './GlobalStyle';

class App extends Component {
  state = {
    seachImage: '',
    showModal: false,
    largeImage: '',
  };
  handleFormSubmit = seachImage => {
    this.setState({ seachImage });
  };
  clickOnGalleryImg = largeImageURL => {
    this.setState({ largeImage: largeImageURL, showModal: true });
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { seachImage, showModal, largeImage } = this.state;
    return (
      <AppWrapper>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          seachImage={seachImage}
          onClick={this.clickOnGalleryImg}
        />
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImage} alt="" />
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
