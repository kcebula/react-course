import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../store/actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component<any> {

  onSubmit = (formValues: any) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Stream Create</h3>
        <StreamForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

export default connect(
  null,
  {createStream}
)(StreamCreate);
