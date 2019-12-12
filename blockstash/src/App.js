import React, { Component } from 'react';
// Page/Component Imports
import Profile from './Profile.js';
import Signin from './Signin.js';
import SideMenu from './Components/Global/SideMenu'
import { Route } from 'react-router-dom';
import {
  UserSession,
  AppConfig
} from 'blockstack';

const appConfig = new AppConfig()
const userSession = new UserSession({ appConfig: appConfig })

export default class App extends Component {


	handleSignIn(e) {
		e.preventDefault();
		userSession.redirectToSignIn();
	}

	handleSignOut(e) {
		e.preventDefault();
		userSession.signUserOut(window.location.origin);
	}

	render() {
		return (
			<div>
				<div>
					{ !userSession.isUserSignedIn() 
						? <Signin userSession={userSession} handleSignIn={ this.handleSignIn } />
						: 
							<React.Fragment>
								<Route path="/" render={() => <SideMenu />}/>
								<Route path="/profile" render={() => <Profile userSession={userSession} handleSignOut={ this.handleSignOut } />} />
								<Route path="/files" />
								<Route path="/shared-files" />
								{/* <Profile userSession={userSession} handleSignOut={ this.handleSignOut } /> */}
							</React.Fragment>
					}
				</div>
			</div>
		);
	}

	componentDidMount() {
		if (userSession.isSignInPending()) {
		userSession.handlePendingSignIn().then((userData) => {
			window.history.replaceState({}, document.title, "/")
			this.setState({ userData: userData})
		});
		}
	}
}
