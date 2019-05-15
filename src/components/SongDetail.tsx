import React from 'react';
import { connect } from 'react-redux';
import { Song } from '../reducers';

class SongDetail extends React.Component<{ song: Song }> {

  renderContent() {
    const song = this.props.song;
    if (!song) {
      return <h3>Select song</h3>
    }

    return ( <div>
        <h1>{this.props.song.title}</h1>
        <h3>Duration: {this.props.song.duration}</h3>
      </div>
    )
  }

  render() {
    return (
      <div className="ui segment">
        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {song: state.selectedSong};
};

export default connect(mapStateToProps)(SongDetail);
