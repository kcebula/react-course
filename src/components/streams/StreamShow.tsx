import React from 'react';
import { connect } from 'react-redux';
import { getStreamById } from '../../store/actions';


class StreamShow extends React.Component<any> {

  componentDidMount(): void {
    this.props.getStreamById(this.props.match.params.id)
  }

  render() {
    const stream = this.props.stream;

    if (!stream) {
      return <div>Loading ...</div>
    }

    return (
      <div>
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
