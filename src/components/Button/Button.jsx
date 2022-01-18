import ButtonLoader from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ loadMore, onClick }) => {
  async function LoadMoreImg() {
    await onClick();
    loadMore();
  }
  return (
    <ButtonLoader type="button" onClick={LoadMoreImg}>
      Load more
    </ButtonLoader>
  );
};
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  loadMore: PropTypes.func.isRequired,
};
export default Button;
