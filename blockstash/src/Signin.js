import React, { Component } from 'react';

export default class Signin extends Component {

  render() {
    const { handleSignIn } = this.props;

    return (
      <div>
        <h1>Hello, Blockstack!</h1>
        <p>
          <button
            onClick={ handleSignIn.bind(this) }
          >
            Sign In with Blockstack
          </button>
        </p>
      </div>
    );
  }
}
