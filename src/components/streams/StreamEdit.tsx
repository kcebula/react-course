import React from 'react';
import { connect } from 'react-redux';
import { editStream, getStreamById } from '../../store/actions';
import StreamForm from './StreamForm';
import * as _ from 'lodash';

class StreamEdit extends React.Component<any> {

  componentDidMount(): void {
    this.props.getStreamById(this.props.match.params.id);
  }

  onSubmit = (formValues: any) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    const stream = this.props.stream;

    if (!stream) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Stream Edit</h3>
        <StreamForm
          initialValues={_.pick(stream, ['title', 'description'])}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  const id = ownProps.match.params.id;
  return {stream: state.streams[id]};
};

export default connect(
  mapStateToProps,
  {getStreamById, editStream}
)(StreamEdit);
