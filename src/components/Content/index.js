import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Content = ({
  likePhotos
}) => {
  return <h2 className='mb-4'>
    Number of favorite images: {Object.keys(likePhotos).length}
  </h2>
};

Content.propTypes = {
  likePhotos: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  likePhotos: state.likePhotos
});

export default connect(mapStateToProps)(Content);