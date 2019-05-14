import React from 'react';
import ReactDOM from 'react-dom'
import faker from 'faker';

import { Comment, CommentProps } from './Comment';
import { ApprovalCard } from './ApprovalCard';

export class App extends React.Component {
  comments: CommentProps[] = Array.from(
    new Array(5),
    () => {
      return {
        author: faker.name.firstName(),
        avatar: faker.image.avatar(),
        content: faker.lorem.sentences(),
        date: faker.date.recent()
      };
    }
  );

  render() {
    return (
        <div>
          <div className="ui container comments">
            {this.comments.map(comment => {
              return <Comment details={comment} />
            })}


          </div>
          <div className="ui container cards">
            {this.comments.map(comment => {
              return <ApprovalCard><Comment details={comment} /></ApprovalCard>
            })}
          </div>
        </div>

    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
