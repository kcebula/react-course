import React from 'react';
import { SearchBar } from './SearchBar';
import { VideoDetail } from './VideoDetail';

import { getVideos } from '../apis/youtube';
import { VideoList } from './VideoList';
import { Video } from '../interfaces/YouTube';

export class App extends React.Component {

  state = {
    videos: [],
    selectedVideo: null
  };

  onSearch = (query: string) => {
    getVideos(query).then(response => {
      const videos = response.data.items;
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  };

  onVideoSelect = (video: Video) => {
    this.setState({selectedVideo: video});
  };

  componentDidMount(): void {
    this.onSearch('cat');
  }

  render() {
    return (
      <div className="ui container app">
        <SearchBar onSearchSubmit={this.onSearch} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos}
                         onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
