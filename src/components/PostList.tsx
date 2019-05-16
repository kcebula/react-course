import React from 'react'
import { connect } from 'react-redux';
import { fetchPostsAndUsers, loadPosts } from '../store/actions';
import UserHeader from './UserHeader';

interface PostListProps {
  loadPosts: () => void;
  fetchPostsAndUsers: () => void;
  posts: any[]
}

class PostList extends React.Component<PostListProps> {

  componentDidMount(): void {
    // this.props.loadPosts();
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      )
    });
  }

  render() {
    console.log(this.props.posts)
    return <div className="ui relaxed divided list">{this.renderList()}</div>
  }
}

const mapStateToProps = (state: any) => {
  return {posts: state.posts}
};

export default connect(
  mapStateToProps,
  { loadPosts, fetchPostsAndUsers }
)(PostList);
