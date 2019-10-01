import { getPhotos, receivePhotos, toggleFavoritePhoto } from '../actions';
import { handleActions } from 'redux-actions';

const initState = {
  loading: true,
  photos: [],
  likePhotos: {},
  count: 0,
  limit: 20
};

const reducer = handleActions(
  {
    [getPhotos]: (state, _) => {
      return { ...state, loading: true };
    },
    [receivePhotos]: (state, { payload: { photos, count }}) => {
      return {
        ...state,
        photos: photos,
        count: count,
        loading: false
      }
    },
    [toggleFavoritePhoto]: (state, { payload: { id } }) => {
      const updatedlikePhotos = Object.assign({}, state.likePhotos);
      updatedlikePhotos[id] ? delete updatedlikePhotos[id] : updatedlikePhotos[id] = true;

      return {
        ...state,
        likePhotos: updatedlikePhotos
      };
    }, 
  },
  initState
);

export default reducer;
