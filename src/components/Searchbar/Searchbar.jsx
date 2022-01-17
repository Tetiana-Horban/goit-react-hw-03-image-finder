import { Component } from 'react';
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
    this.setState({ seachImage: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.seachImage.trim() === '') {
      return toast.error('Enter a search name');
    }
    this.props.onSubmit(this.state.seachImage);
    this.setState({ seachImage: '' });
  };
  render() {
    return (
      <div>
        <SearchbarWrapper>
          <SearchForm onSubmit={this.handleSubmit}>
            <SearchFormButton type="submit">
              <FcSearch size={35} />
              <SearchFormLabel>Search</SearchFormLabel>
            </SearchFormButton>

            <SearchFormInput
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              onChange={this.handleNameChange}
              value={this.state.seachImage}
              placeholder="Search images and photos"
            />
          </SearchForm>
        </SearchbarWrapper>
      </div>
    );
  }
}
export default Searchbar;
