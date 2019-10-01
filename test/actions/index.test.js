import { GET_PHOTOS, PHOTOS_RECEIVED, TOGGLE_FAVORITE_PHOTO } from '../../src/types';
import { getPhotos, receivePhotos, toggleFavoritePhoto } from '../../src/actions';

describe('In Actions,', () => {
  it('getPhotos action should get photos with page and limit payload', () => {
    const page = 1;
    const limit = 10;
    const action = {
      type: GET_PHOTOS,
      payload: {
        page,
        limit
      }
    }
    expect(getPhotos({ page, limit })).toEqual(action);
  });

  it('receivePhotos action should receive photos', () => {
    const count = 1;
    const photos = [
      {
        id: 1,
        url: 'https://test.com/1.png'
      }
    ];
    const action = {
      type: PHOTOS_RECEIVED,
      payload: {
        count,
        photos
      }
    }
    expect(receivePhotos({ count, photos })).toEqual(action);
  });

  it('toggleFavoritePhoto action should toggle favorite photo status with photo id', () => {
    const id = 1;
    const action = {
      type: TOGGLE_FAVORITE_PHOTO,
      payload: {
        id
      }
    }
    expect(toggleFavoritePhoto({ id })).toEqual(action);
  });
});
