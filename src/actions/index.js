import { GET_PHOTOS, PHOTOS_RECEIVED, TOGGLE_FAVORITE_PHOTO } from '../types';

import { createAction } from 'redux-actions';

export const getPhotos = createAction(GET_PHOTOS);
export const receivePhotos = createAction(PHOTOS_RECEIVED);
export const toggleFavoritePhoto = createAction(TOGGLE_FAVORITE_PHOTO);
