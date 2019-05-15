import React from 'react';
import { Video } from '../interfaces/YouTube';

interface VideoDetailProps {
  video: Video | null
}

export class VideoDetail extends React.Component<VideoDetailProps> {
  render() {
    const {video} = this.props;

    if (!video) {
      return <div>Loading</div>;
    }

    return (
      <div>
        <div className="ui embed">
          <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} title="A video player" />
        </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>

      </div>
      </div>
    );
  }
}
