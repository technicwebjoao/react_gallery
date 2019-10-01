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
    let payload = { page, limit };
    const generator = fetchPhotos({ payload });
    expect(generator.next().value).toEqual(call(loadPagePhotos, page, limit));
    payload = { photos, count };
    expect(generator.next(payload).value)
      .toEqual(put(
        { type: PHOTOS_RECEIVED, payload }
      ));
  });

  it('exception returns empty photo array and 0 count', () => {
    const page = 1;
    const limit = 10;
    const photos = [];
    const count = 0;
    let payload = { page, limit };
    const generator = fetchPhotos({ payload });
    expect(generator.next().value).toEqual(call(loadPagePhotos, page, limit));
    payload = { photos, count };
    expect(generator.throw('error').value)
      .toEqual(put(
        { type: PHOTOS_RECEIVED, payload }
      ));
  });
});
