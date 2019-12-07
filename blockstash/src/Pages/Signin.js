import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSignIn } from '../Redux/actions';

class Signin extends Component {

  render() {
    const { handleSignIn } = this.props;

    return (
      <div>
        <h1>Hello, Blockstack!</h1>
        <p>
          <button
            onClick={ handleSignIn }
          >
            Sign In with Blockstack
          </button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
	return {
		isAuthenticated : state.isAuthenticated,
		allFiles : state.allFiles,
		renderedFiles : state.renderedFiles,
		userSession : state.userSession
	}
}

export default connect(mapStateToProps, { handleSignIn })(Signin)
