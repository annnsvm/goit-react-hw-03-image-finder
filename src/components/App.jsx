import SearchBar from './Searchbar/Searchbar';
import { Component } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
import { fetchData } from 'service/api';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    per_page: 12,
    totalImages: 0,
    showModal: { isOpen: false, largeImgURL: '' },
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.fetchImg();
    }
  }

  onModalOpen = data => {
    this.setState({
      showModal: { isOpen: true, largeImgURL: data },
    });
  };

  onModalClose = () => {
    this.setState({
      showModal: { isOpen: false, largeImgURL: '' },
    });
  };

  handleSubmitSearch = query => {
    this.setState({
      query,
      images: [],
      page: 1,
    });
    this.fetchImg(query, 1);
  };

  fetchImg = async (query, page) => {
    try {
      const data = await fetchData(query, page);
      this.setState(prevState => {
        return {
          images: [...prevState.images, ...data.hits],
          totalImages: data.totalHits,
        };
      });
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  render() {
    const { images, showModal } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handleSubmitSearch}></SearchBar>
        <ImageGallery
          images={images}
          onModalOpen={this.onModalOpen}
        ></ImageGallery>
        {showModal.isOpen && (
          <Modal
            largeImgURL={showModal.largeImgURL}
            onModalClose={this.onModalClose}
          ></Modal>
        )}

        {/* <ToastContainer autoClose={3000} />
        <ToastContainer /> */}
      </>
    );
  }
}
