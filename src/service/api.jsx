import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '37973339-7e73853af9c8eb5152083ee1b';

export const fetchData = async (query, page) => {
  const { data } = await axios.get(
    `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};
