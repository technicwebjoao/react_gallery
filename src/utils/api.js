import axios from 'axios';
const URL = 'https://jsonplaceholder.typicode.com/photos';

export const loadPagePhotos = async (page = 1, limit = 10) => {
  const res = await axios.get(`${URL}?_page=${page}&_limit=${limit}`);

  if (res.status >= 200 && res.status < 300) {
    let count = 0;

    if (res.headers['x-total-count']) {
      count = parseInt(res.headers['x-total-count'], 10);
    }

    return { photos: res.data, count };
  } else {
    throw new Error('Sever error');
  }
};
