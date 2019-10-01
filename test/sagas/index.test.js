import { call, put } from 'redux-saga/effects';
import { loadPagePhotos } from '../../src/utils/api';
import { fetchPhotos } from '../../src/sagas';
import { PHOTOS_RECEIVED } from '../../src/types';

describe('In sagas,', () => {

  it('it fetches the photos successfully', () => {
    const page = 1;
    const limit = 10;
    const photos = [{
      id: 1,
      url: 'https://test.com/1.png'
    }];
    const count = 1;
    const generator = fetchPhotos({ page, limit });
    expect(generator.next().value).toEqual(call(loadPagePhotos, page, limit));
    expect(generator.next({
      photos,
      count
    }).value)
      .toEqual(put(
        { type: PHOTOS_RECEIVED, photos, count }
      ));
  });

  it('exception returns empty photo array and 0 count', () => {
    const page = 1;
    const limit = 10;
    const photos = [];
    const count = 0;
    const generator = fetchPhotos({ page, limit });
    expect(generator.next().value).toEqual(call(loadPagePhotos, page, limit));
    expect(generator.throw('error').value)
      .toEqual(put(
        { type: PHOTOS_RECEIVED, photos, count }
      ));
  });
});
