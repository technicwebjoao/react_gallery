import { GET_PHOTOS, PHOTOS_RECEIVED, TOGGLE_FAVORITE_PHOTO } from '../types';

const initialState = {
  loading: true,
  photos: [],
  likePhotos: {},
  count: 0,
  limit: 10
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTOS:
      return { ...state, loading: true };
    case PHOTOS_RECEIVED:
      return {
        ...state,
        photos: action.photos,
        count: action.count,
        loading: false
      }
    case TOGGLE_FAVORITE_PHOTO:
      const updatedlikePhotos = Object.assign({}, state.likePhotos);
      updatedlikePhotos[action.id] ? delete updatedlikePhotos[action.id] : updatedlikePhotos[action.id] = true;

      return {
        ...state,
        likePhotos: updatedlikePhotos
      };
    default: 
      return state;
  }
};

export default reducer;
