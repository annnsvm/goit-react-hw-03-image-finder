import { Component } from 'react';
import React from 'react';
import css from './Searchbar.module.css';
import { ReactComponent as MyIcon } from '../icons/search.svg';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({ query: event.target.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.query.trim() === '') {
      return alert('Please enter the search data.');
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <header className={css.searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <MyIcon className={css.icon} />
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={query}
          />
        </form>
      </header>
    );
  }
}

SearchBar.prototype = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
