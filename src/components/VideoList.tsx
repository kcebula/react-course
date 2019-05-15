import React from 'react';
import { Video } from '../interfaces/YouTube';
import { VideoItem } from './VideoItem';

interface VideoListProps {
  videos: Video[]
  onVideoSelect: (video: Video) => void,
}

export class VideoList extends React.Component<VideoListProps> {
  render() {
    return (
      <div className="ui relaxed divided selection list">
        {this.props.videos.map(video => {
          return <VideoItem video={video} key={video.id.videoId} onVideoSelect={this.props.onVideoSelect} />
        })}
      </div>
    )
  }
}
