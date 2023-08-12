import SearchBar from '../Searchbar/Searchbar';
import React, { Component } from 'react';

import { fetchData } from 'service/api';
import ImageGallery from '../ImageGallery/ImageGallery';
import Modal from '../Modal/Modal';
import Loader from '../Loader/Loader';
import Button from 'components/Button/Button';
import css from './App.module.css';
import { toast, ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    per_page: 12,
    totalImages: 0,
    showModal: { isOpen: false, largeImageURL: '' },
    loading: false,
  };

  componentDidMount() {
    this.fetchImg();
  }

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.fetchImg(query, page);
    }
  }

  fetchImg = async (query, page) => {
    if (!query) {
      return;
    }
    try {
      this.setState({ loading: true });
      const { hits, totalHits } = await fetchData(query, page);

      if (hits.length === 0) {
        return toast.info('Sorry, image not found...', {
          position: toast.POSITION.TOP_RIGHT,
        });
      }

      // console.log(hits, totalHits);
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        loading: this.state.page < Math.ceil(totalHits / this.state.per_page),
      }));
    } catch (error) {
      console.error('Error fetching data', error);
    } finally {
      this.setState({ loading: false });
    }
  };

  onModalOpen = data => {
    this.setState({
      showModal: { isOpen: true, largeImageURL: data },
    });
  };

  onModalClose = () => {
    this.setState({
      showModal: { isOpen: false, largeImageURL: '' },
    });
  };

  handleSubmitSearch = query => {
    this.setState({
      query,
      images: [],
      page: 1,
    });
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, showModal, loading, totalImages } = this.state;
    const btnLoadMore = !loading && images.length !== totalImages;
    return (
      <div className={css.App}>
        <ToastContainer transition={Slide} />
        <SearchBar onSubmit={this.handleSubmitSearch} />
        {loading && <Loader />}
        <ImageGallery images={images} onModalOpen={this.onModalOpen} />
        {btnLoadMore && <Button onLoadMore={this.onLoadMore} />}
        {showModal.isOpen && (
          <Modal
            largeImageURL={showModal.largeImageURL}
            onModalClose={this.onModalClose}
          />
        )}
      </div>
    );
  }
}
