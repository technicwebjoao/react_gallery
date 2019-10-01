import { GET_PHOTOS, TOGGLE_FAVORITE_PHOTO } from '../../src/types';
import { getPhotos, toggleFavoritePhoto } from '../../src/actions';

describe('In Actions,', () => {
  it('getPhotos action should get photos with page and limit payload', () => {
    const page = 1;
    const limit = 10;
    const action = {
      type: GET_PHOTOS,
      page,
      limit
    }
    expect(getPhotos(page, limit)).toEqual(action);
  });

  it('toggleFavoritePhoto action should toggle favorite photo status with photo id', () => {
    const id = 1;
    const action = {
      type: TOGGLE_FAVORITE_PHOTO,
      id
    }
    expect(toggleFavoritePhoto(id)).toEqual(action);
  });
});
