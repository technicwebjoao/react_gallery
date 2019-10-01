import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PaginationComponent from 'react-reactstrap-pagination';
import Gallery from 'react-grid-gallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getPhotos, toggleFavoritePhoto } from '../../actions';
import './styles.css';

const Photos = ({
  photos,
  loading,
  loadPhotos,
  toggleFavoritePhoto,
  pageLimit,
  count,
  likePhotos
}) => {
  const [images, setImages] = useState([]);
  const [selectedPage, setSelectedPage] = useState(1);

  useEffect(() => {
    loadPhotos({
      page: 1,
      limit: pageLimit
    });
  }, []);

  useEffect(() => {
    manipulatePhotos();
  }, [loading, likePhotos]);

  const onclickFavoritePhoto = (e, id) => {
    e.preventDefault();
    toggleFavoritePhoto({ id });
  };

  const customOverlay = (id, isLike, title) => (
    <div className='d-flex flex-row justify-content-center align-items-center p-2 custom-overlay-wrapper' onClick={(e) => e.preventDefault()}>
      <Button color={isLike ? 'warning' : 'primary'} onClick={(e) => onclickFavoritePhoto(e, id)}>
        <FontAwesomeIcon icon={isLike ? 'thumbs-down': 'thumbs-up'} />
      </Button>
    </div>
  );

  const manipulatePhotos = () => {
    const imgs = photos.map(photo => {
      return {
        id: photo.id,
        src: photo.url,
        thumbnailWidth: 320,
        thumbnailHeight: 320,
        thumbnail: photo.thumbnailUrl,
        isSelected: !!likePhotos[photo.id],
        caption: photo.title,
        thumbnailCaption: customOverlay(photo.id, !!likePhotos[photo.id], photo.title),
      };
    });

    setImages(imgs);
  };

  const handleSelected = (selectedPage) => {
    loadPhotos({
      page: selectedPage,
      limit: pageLimit
    });
    setSelectedPage(selectedPage);
  };

  return <div className='d-flex flex-column'>
    <div className='gallery-wrapper'>
      <Gallery
        images={images}
        backdropClosesModal={true}
        enableImageSelection={false} />
    </div>

    <div className='mt-4'>
      <PaginationComponent
        totalItems={count}
        pageSize={pageLimit}
        maxPaginationNumbers={10}
        activePage={selectedPage}
        onSelect={handleSelected} />
    </div>
  </div>
};

Photos.propTypes = {
  photos: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  pageLimit: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  loadPhotos: PropTypes.func.isRequired,
  likePhotos: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  photos: state.photos,
  loading: state.loading,
  pageLimit: state.limit,
  count: state.count,
  likePhotos: state.likePhotos
});

const mapDispatchToProps = {
  loadPhotos: getPhotos,
  toggleFavoritePhoto: toggleFavoritePhoto
};

export default connect(mapStateToProps, mapDispatchToProps)(Photos);