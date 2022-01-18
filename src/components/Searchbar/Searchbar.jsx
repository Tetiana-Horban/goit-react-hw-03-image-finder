import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { FcSearch } from 'react-icons/fc';

import {
  SearchFormInput,
  SearchFormLabel,
  SearchFormButton,
  SearchForm,
  SearchbarWrapper,
} from './Seachbar.styled';

class Searchbar extends Component {
  state = {
    seachImage: '',
  };
  handleNameChange = event => {
    const normaliseImageValue = event.currentTarget.value.toLowerCase();
    this.setState({ seachImage: normaliseImageValue });
  };

  handleSubmit = event => {
    const { seachImage } = this.state;
    event.preventDefault();
    if (seachImage.trim() === '') {
      return toast.error('Enter a search name');
    }
    this.props.onSubmit(seachImage);
    this.setState({ seachImage: '' });
  };
  render() {
    const { seachImage } = this.state;

    return (
      <SearchbarWrapper>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <FcSearch size={35} />
            <SearchFormLabel>Search</SearchFormLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            onChange={this.handleNameChange}
            value={seachImage}
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarWrapper>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
