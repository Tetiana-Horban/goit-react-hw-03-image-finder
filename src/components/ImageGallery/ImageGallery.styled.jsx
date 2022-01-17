import styled from 'styled-components';

const ImageGalleryList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

const BackgroundImg = styled.div`
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(https://cdn.pixabay.com/photo/2021/11/11/17/14/year-6786741_960_720.jpg);
`;
export { BackgroundImg, ImageGalleryList };
