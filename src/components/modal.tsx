import React from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component<any> {
  onBackdropClick = () => {
    this.props.onDismiss();
  };

  render() {
    return ReactDOM.createPortal(
      <div className="ui dimmer modals visible active" onClick={this.onBackdropClick}>
        <div className="ui standard modal visible active" onClick={event => event.stopPropagation()}>
          <div className="header">{this.props.title}</div>
          <div className="content">{this.props.content}</div>
          <div className="actions">{this.props.actions}</div>
        </div>
      </div>,
      document.querySelector('#overlay') as Element
    )
  }
}

export default Modal;
