import axios from 'axios';
const URL = 'https://jsonplaceholder.typicode.com/photos';

export const loadPagePhotos = async (page = 1, limit = 10) => {
  const response = await axios.get(`${URL}?_page=${page}&_limit=${limit}`);

  if (response.status >= 200 && response.status < 300) {
    const count =
      response.headers['x-total-count'] ?
      parseInt(response.headers['x-total-count']) :
      0;

    return { photos: response.data, count };
  } else {
    throw new Error('Sever error');
  }
};
