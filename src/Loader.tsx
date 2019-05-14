import React from 'react';
const defaultProps = {
    text: 'Loading'
  };

export class Loader extends React.Component<{ text?: string }> {

  render() {
    const { text } = { ...defaultProps, ...this.props };
    return (
      <div className="ui active dimmer">
        <div className="ui text loader">{text}</div>
      </div>
    );
  }
}
