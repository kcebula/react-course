import React from 'react';
import { connect } from 'react-redux';
import { Song } from '../reducers';
import { selectSong } from '../actions';

class SongListComponent extends React.Component<{ songs: Song[]; selectSong: Function }> {

  onSongSelect = (song: Song) => {
    console.log(song);
    this.props.selectSong(song)
  };

  renderContent() {
    return this.props.songs.map((song: Song) => {
      return (
        <div className="item"
             key={song.title}>
          <div className="right floated content ">
            <button className="ui button middle" onClick={() => this.onSongSelect(song)}>Select</button>
          </div>
          <div className="content">
            <h3 className="header">{song.title}</h3>
            <div className="description">Duration: {song.duration}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">
      {this.renderContent()}
    </div>
  }
}

const mapStateToProps = (state: any) => {
  return {
    songs: state.songs
  };
};

export default connect(
  mapStateToProps,
  {
    selectSong: selectSong
  }
)(SongListComponent);
