import React from 'react';
import VideoGame from './VideoGame';
import PropTypes from 'prop-types';

class VideoGameList extends React.Component {
  render() {
    const { games } = this.props;

    return (
      <div>
        {games.map((item, index) => (
          <VideoGame game={item} key={index} />
        ))}
      </div>
    );
  }
}

export default VideoGameList;

VideoGameList.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      developer: PropTypes.string,
      sales: PropTypes.number,
    })
  ),
};

VideoGameList.defaultProps = {
  games: [],
};
