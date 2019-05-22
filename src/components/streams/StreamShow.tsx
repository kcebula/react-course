import React from 'react';
import { connect } from 'react-redux';
import { getStreamById } from '../../store/actions';

import flv from 'flv.js';


class StreamShow extends React.Component<any> {

  videoRef: any;
  player: flv.Player | null = null;

  constructor(props: any) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidMount(): void {
    this.props.getStreamById(this.props.match.params.id);

    this.buildPlayer();
  }

  componentDidUpdate(): void {
    this.buildPlayer();
  }

  componentWillUnmount(): void {
    if (this.player) {
      this.player.destroy();
    }
  }

  buildPlayer() {
    if (this.player || !this.props.stream) {
      return;
    }

    const id = this.props.match.params.id;

    this.player = flv.createPlayer({
      type: 'flv',
      isLive: true,
      url: `http://localhost:8000/live/${id}.flv`
    });

    this.player.attachMediaElement(this.videoRef.current as HTMLMediaElement);
    this.player.load();
  }

  render() {
    const stream = this.props.stream;

    if (!stream) {
      return <div>Loading ...</div>
    }

    return (
      <div>
        <video ref={this.videoRef} style={{width: '100%'}} controls/>
        <h3>{stream.title}</h3>
        <p>{stream.description}</p>
      </div>
    )
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
};

export default connect(
  mapStateToProps,
  { getStreamById }
)(StreamShow);
