import { GET_PHOTOS, TOGGLE_FAVORITE_PHOTO } from '../types';

export const getPhotos = (page, limit) => ({
  type: GET_PHOTOS,
  page,
  limit
});

export const toggleFavoritePhoto = (id) => ({
  type: TOGGLE_FAVORITE_PHOTO,
  id
});
