import { Component } from 'react';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';

import css from './searchbar.module.css';

class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChande = ({ target }) => {
    // console.log(target);
    // console.log(target.value);
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    // this.props.onSubmit(this.state);
    // this.reset();
  };

  reset() {
    this.setState({ search: '' });
  }

  render() {
    const { search } = this.state;
    const { handleChande, handleSubmit } = this;

    return (
      <header className={css.searchbar}>
        <form onSubmit={handleSubmit} className={css.searchForm}>
          <button type="submit" className={css.searchForm_button}>
            <BsSearch className={css.icon} />
            <span className={css.searchForm_button_label}>Search</span>
          </button>
          <input
            onChange={handleChande}
            value={search}
            className={css.searchForm_input}
            required
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
