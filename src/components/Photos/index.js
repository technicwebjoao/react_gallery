import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PaginationComponent from 'react-reactstrap-pagination';
import Gallery from 'react-grid-gallery';
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
    loadPhotos();
  }, []);

  useEffect(() => {
    manipulatePhotos();
  }, [loading, likePhotos]);

  const manipulatePhotos = () => {
    const imgs = photos.map(photo => {
      return {
        id: photo.id,
        src: photo.url,
        thumbnail: photo.thumbnailUrl,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: !!likePhotos[photo.id],
        caption: photo.title
      };
    });

    setImages(imgs);
  };

  const handleSelected = (selectedPage) => {
    loadPhotos(selectedPage, pageLimit);
    setSelectedPage(selectedPage);
  };

  const onSelectImage = (index, photo) => {
    toggleFavoritePhoto(photo.id);
  };

  return <div className='d-flex flex-column'>
    <div className='gallery-wrapper'>
      <Gallery
        images={images}
        backdropClosesModal={true}
        onClickImage={()=>{}}
        onSelectImage={onSelectImage} />
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