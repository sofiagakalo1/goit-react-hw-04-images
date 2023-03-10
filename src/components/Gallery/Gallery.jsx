import { useState, useEffect } from 'react';
import css from '../Gallery/gallery.module.css';

import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Modal from '../Modal';
import Loader from '../Loader';
import Button from '../Button';

import { getGalleryItems } from '../../services/galleryApi';

const Gallery = () => {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState('');
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        if (search === '') {
          return;
        }
        setLoading(true);
        const { hits, totalHits } = await getGalleryItems(search, page);
        setTotalHits(totalHits);
        setItems(prevItems => [...prevItems, ...hits]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, [search, page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const seachImage = searchQuery => {
    if (searchQuery === search) {
      return;
    }
    setSearch(searchQuery);
    setItems([]);
    setPage(1);
  };

  const openModal = bigImg => {
    setShowModal(true);
    setModalImg(bigImg);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImg('');
  };

  const noResults = () => {
    if (totalHits === 0) {
      return <p>No results. Try something else :(</p>;
    }
  };

  const showLoadMore = () => {
    // console.log(totalHits);
    // console.log(items.length);
    if ((totalHits <= items.length && !loading) || items.length < 1) {
      return Boolean;
    }
  };
  return (
    <div className={css.Gallery}>
      <Searchbar onSubmit={seachImage} />
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      <ImageGallery items={items} openModal={openModal} />
      {loading && <Loader loading={loading} page={page} loadMore={loadMore} />}
      {noResults()}
      {!showLoadMore() && (
        <Button loadMore={loadMore} type="button" text="Load more" />
      )}
      {showModal && <Modal close={closeModal} bigImg={modalImg} />}
    </div>
  );
};

export default Gallery;

// class Gallery extends Component {
//   state = {
//     search: '',
//     items: [],
//     loading: false,
//     error: null,
//     showModal: false,
//     modalImg: '',
//     page: 1,
//     totalHits: null,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const { search, page } = this.state;
//     if (prevState.search !== search || prevState.page !== page) {
//       this.fetchItems();
//     }
//   }

//   async fetchItems() {
//     try {
//       const { search, page, perPage } = this.state;
//       this.setState({ loading: true });
//       const { hits, totalHits } = await getGalleryItems(search, page, perPage);
//       this.setState({ totalHits: totalHits });
//       this.setState(({ items }) => ({ items: [...items, ...hits] }));
//     } catch (error) {
//       this.setState({ error: error.message });
//     } finally {
//       this.setState({ loading: false });
//     }
//   }

//   loadMore = () => {
//     this.setState(({ page }) => ({ page: page + 1 }));
//   };

//   seachImage = ({ search }) => {
//     if (search === this.state.search) {
//       return;
//     }
//     this.setState({ search, items: [], page: 1 });
//   };

//   openModal = bigImg => {
//     this.setState({ showModal: true, modalImg: bigImg });
//   };

//   closeModal = () => {
//     this.setState({ showModal: false, modalImg: '' });
//   };

//   noResults = () => {
//     const { totalHits } = this.state;
//     if (totalHits === 0) {
//       return <p>No results. Try something else :(</p>;
//     }
//   };

//   showLoadMore = () => {
//     const { totalHits, loading, items } = this.state;
//     // console.log(totalHits);
//     // console.log(items.length);
//     if ((totalHits <= items.length && !loading) || items.length < 1) {
//       return Boolean;
//     }
//   };

//   render() {
//     const { items, loading, error, modalImg, showModal, totalPages, page } =
//       this.state;
//     const {
//       openModal,
//       closeModal,
//       loadMore,
//       seachImage,
//       showLoadMore,
//       noResults,
//     } = this;
//     return (
//       <div className={css.Gallery}>
//         <Searchbar onSubmit={seachImage} />
//         {error && <p>{error}</p>}
//         {loading && <p>Loading...</p>}
//         <ImageGallery items={items} openModal={openModal} />
//         {loading && (
//           <Loader
//             loading={loading}
//             page={page}
//             totalPages={totalPages}
//             loadMore={loadMore}
//           />
//         )}
//         {noResults()}
//         {!showLoadMore() && (
//           <Button loadMore={loadMore} type="button" text="Load more" />
//         )}
//         {showModal && <Modal close={closeModal} bigImg={modalImg} />}
//       </div>
//     );
//   }
// }
