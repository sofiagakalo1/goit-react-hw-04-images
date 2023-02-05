import { useState } from 'react';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';

import css from './searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChande = event => {
    const { value } = event.target;
    setSearch(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(search);
  };

  // const reset = () => {
  //   setSearch('');
  // }

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
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;

// class Searchbar extends Component {
//   state = {
//     search: '',
//   };

//   handleChande = event => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.onSubmit({ ...this.state });
//     // this.props.onSubmit(this.state);
//     // this.reset();
//   };

//   // reset() {
//   //   this.setState({ search: '' });
//   // }

//   render() {
//     const { search } = this.state;
//     const { handleChande, handleSubmit } = this;

//     return (
//       <header className={css.searchbar}>
//         <form onSubmit={handleSubmit} className={css.searchForm}>
//           <button type="submit" className={css.searchForm_button}>
//             <BsSearch className={css.icon} />
//             <span className={css.searchForm_button_label}>Search</span>
//           </button>
//           <input
//             onChange={handleChande}
//             value={search}
//             className={css.searchForm_input}
//             required
//             name="search"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//         </form>
//       </header>
//     );
//   }
// }
