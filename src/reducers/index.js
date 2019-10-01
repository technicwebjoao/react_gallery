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

// const reducer = (state = initState, action) => {
//   switch (action.type) {
//     case GET_PHOTOS:
//       return { ...state, loading: true };
//     case PHOTOS_RECEIVED:
//       return {
//         ...state,
//         photos: action.photos,
//         count: action.count,
//         loading: false
//       }
//     case TOGGLE_FAVORITE_PHOTO:
//       const updatedlikePhotos = Object.assign({}, state.likePhotos);
//       updatedlikePhotos[action.id] ? delete updatedlikePhotos[action.id] : updatedlikePhotos[action.id] = true;

//       return {
//         ...state,
//         likePhotos: updatedlikePhotos
//       };
//     default: 
//       return state;
//   }
// };

export default reducer;
