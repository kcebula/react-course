import React from 'react'
import { connect } from 'react-redux';
import { getUserById } from '../store/actions';

interface UserHeaderProps {
  userId: number;
  getUserById: (id: number) => void;
  user: any
}

class UserHeader extends React.Component<UserHeaderProps> {

  componentDidMount(): void {
    // this.props.getUserById(this.props.userId);
  }

  render() {
    const user = this.props.user;

    if (!user) {
      return <span>Loading...</span>
    }

    return <div className="header">{this.props.user.name}</div>
  }

}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    user: state.users.find((user: any) => user.id === ownProps.userId)
  }
};

const mapDispatchToProps = {
  getUserById
};

export default connect(mapStateToProps, mapDispatchToProps)(UserHeader)
