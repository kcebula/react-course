import React from 'react';
import { clientId } from '../secrets';

import {connect} from 'react-redux';
import { signIn, signOut } from './../store/actions'
import { ActionCreator } from 'redux';

declare const gapi: any;

interface GoogleAuthProps {
  signIn: ActionCreator<void>,
  signOut: ActionCreator<void>,
  isSignedIn: boolean | null
}

class GoogleAuth extends React.Component<GoogleAuthProps> {
  private auth: any;

  componentDidMount(): void {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        clientId: clientId,
        scope: 'email'
      }).then(() => {
        this.auth = gapi.auth2.getAuthInstance();

        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = (isSignedIn: boolean) => {
    isSignedIn
      ? this.props.signIn(this.auth.currentUser.get().getId())
      : this.props.signOut();
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign out
        </button>
      );
    }

    return (
      <button onClick={this.onSignInClick} className="ui red google button">
        <i className="google icon" />
        Sign in
      </button>
    );
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state: any) => {
 return {
    isSignedIn: state.auth.isSignedIn
 }
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
