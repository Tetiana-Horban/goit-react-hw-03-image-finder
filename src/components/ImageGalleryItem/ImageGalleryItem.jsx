import PropTypes from 'prop-types';
import {
  ImageGalleryItemWrapper,
  ImageGalleryImg,
} from './ImageGalleryItem.styled';

const ImageGalleryItem = ({
  id,
  tags,
  webformatURL,
  openModal,
  largeImage,
}) => {
  return (
    <ImageGalleryItemWrapper key={id}>
      <ImageGalleryImg
        src={webformatURL}
        alt={tags}
        onClick={() => {
          openModal(largeImage);
        }}
      />
    </ImageGalleryItemWrapper>
  );
};
ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
};
export default ImageGalleryItem;
