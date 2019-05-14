import React from 'react';

export interface CommentProps {
  author: string;
  avatar: string;
  date: Date;
  content: string;
}

export class Comment extends React.Component<{details: CommentProps}> {

  render() {
    return (
      <div className="ui container comments">
        <div className="comment">
          <a href="/" className="avatar">
            <img alt="avatar" src={this.props.details.avatar}/>
          </a>
          <div className="content">
            <a href="/" className="author">
              {this.props.details.author}
            </a>
            <div className="metadata">
              <span className="date">{this.props.details.date.toDateString()}</span>
            </div>
            <div className="text">{this.props.details.content}</div>
          </div>
        </div>
      </div>
    )
  }
}
