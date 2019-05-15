import React from 'react';
import { Video } from '../interfaces/YouTube';
import './VideoItem.css'

interface VideoItemProps {
  video: Video,
  onVideoSelect: (video: Video) => void
}

export class VideoItem extends React.Component<VideoItemProps> {

  render() {
    const snippet = this.props.video.snippet;
    return (
      <div className="item video-item" onClick={() => this.props.onVideoSelect(this.props.video)}>
        <img src={snippet.thumbnails.medium.url}
             alt={snippet.title}
             className="ui image"/>
        <div className="content">
          <span className="header">{snippet.title}</span>
        </div>
      </div>
    );
  }
}
