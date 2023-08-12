import SearchBar from '../Searchbar/Searchbar';
import React, { Component } from 'react';

import { fetchData } from 'service/api';
import ImageGallery from '../ImageGallery/ImageGallery';
import Modal from '../Modal/Modal';
import Loader from '../Loader/Loader';
import Button from 'components/Button/Button';
import css from './App.module.css';

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

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ images: [], page: 1 }, () => {
        this.fetchImg();
      });
    }
  }

  fetchImg = async (query, page) => {
    try {
      this.setState({ loading: true });
      const { hits, totalHits } = await fetchData(query, page);
      this.setState(prevState => {
        return {
          images: [...prevState.images, ...hits],
          totalImages: totalHits,
        };
      });
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
