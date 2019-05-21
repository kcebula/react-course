import React from 'react';
import Modal from '../modal';
import history from '../../history';
import { connect } from 'react-redux';
import { deleteStreamById, getStreamById } from '../../store/actions';

class StreamDelete extends React.Component<any> {

  componentDidMount(): void {
    this.props.getStreamById(this.props.match.params.id);
  }

  onModalDismiss = () => {
    history.push('/');
  };

  onDelete = () => {
    this.props.deleteStreamById(this.props.match.params.id);
  };

  renderActions() {
    return (
      <React.Fragment>
        <button className="ui button"
                onClick={this.onModalDismiss}>Cancel
        </button>
        <button className="ui button negative"
                onClick={this.onDelete}>Delete
        </button>
      </React.Fragment>
    );


  }
  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?'
    } else {
      return `Are you sure you want to delete stream titled: "${this.props.stream.title}" ?`
    }

  }

  render() {
    return (
        <Modal
          title="Stream Delete"
          content={this.renderContent()}
          onDismiss={this.onModalDismiss}
          actions={this.renderActions()}
        />
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
};

export default connect(
  mapStateToProps,
  {getStreamById, deleteStreamById}
)(StreamDelete);
