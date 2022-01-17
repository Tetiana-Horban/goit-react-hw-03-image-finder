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
    <ImageGalleryItemWrapper className="gallery-item" key={id}>
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

export default ImageGalleryItem;
