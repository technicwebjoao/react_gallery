import reducers from '../../src/reducers';
import { GET_PHOTOS, PHOTOS_RECEIVED, TOGGLE_FAVORITE_PHOTO } from '../../src/types';

const initialState = {
  loading: true,
  photos: [],
  likePhotos: {},
  count: 0,
  limit: 10
};

describe('In Reducers', () => {
  it('GET_PHOTOS action should start getting photos', () => {
    const action = {
      type: GET_PHOTOS
    };
    expect(reducers(initialState, action).loading).toEqual(true);
  });

  it('PHOTOS_RECEIVED action should get photos', () => {
    const photos = [
      {
        id: 1,
        url: 'https://test.com/1.png'
      }
    ];
    const count = 1;
    const action = {
      type: PHOTOS_RECEIVED,
      photos,
      count
    };
    expect(reducers(initialState, action)).toEqual({
      loading: false,
      photos,
      likePhotos: {},
      count,
      limit: 10
    });
  });

  it('TOGGLE_FAVORITE_PHOTO action should get photos', () => {
    const id = 1;
    const action = {
      type: TOGGLE_FAVORITE_PHOTO,
      id
    };
    expect(reducers(initialState, action).likePhotos).toEqual({
      1: true
    });
  });
});