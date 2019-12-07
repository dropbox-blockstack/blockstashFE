import React, { Component } from 'react';
import {
  Person,
} from 'blockstack';
// import { connect } from 'http2';
import { connect } from 'react-redux';
import { handleSignOut } from '../Redux/actions';

const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';

class Profile extends Component {
		constructor(props) {
		super(props);

		this.state = {
			person: {
			name() {
				return 'Anonymous';
			},
			avatarUrl() {
				return avatarFallbackImage;
			},
			},
		};
		}

		render() {
		const { handleSignOut, userSession } = this.props;
		const { person } = this.state;
		return (
			!this.props.userSession.isSignInPending() ?
			<div>
			<div>
				<img src={ person.avatarUrl() ? person.avatarUrl() : avatarFallbackImage } id="avatar-image" alt=""/>
			</div>
			<h1>Hello, <span>{ person.name() ? person.name() : 'Nameless Person' }</span>!</h1>
			<p>
				<button
				onClick={ handleSignOut }
				>
				Logout
				</button>
			</p>
			</div> : null
		);
  }

	componentWillMount() {
		const { userSession } = this.props;
		this.setState({
		person: new Person(userSession.loadUserData().profile),
		});
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

export default connect(mapStateToProps, { handleSignOut })(Profile)
