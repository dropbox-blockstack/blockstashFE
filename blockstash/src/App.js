import React, { Component } from 'react';
// Page/Component Imports
import Profile from './Profile.js';
import Signin from './Signin.js';
import SideMenu from './Components/Global/SideMenu';
import Files from './Pages/Files';
import { Route } from 'react-router-dom';
import {
  UserSession,
  AppConfig
} from 'blockstack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
			<Container fluid>
				{ !userSession.isUserSignedIn() 
					? 
						<Signin userSession={userSession} handleSignIn={ this.handleSignIn } />
					: 
						<Row style={{height : "100vh"}}>
							<Col xl="2">
								<Route path="/" render={() => <SideMenu />}/>
							</Col>
							<Col fluid xl="10">
								<Route path="/profile" render={() => <Profile userSession={userSession} handleSignOut={ this.handleSignOut } />} />
								<Route path="/files" render={() => <Files /> }/>
								<Route path="/shared-files" />
							</Col>
							{/* <Profile userSession={userSession} handleSignOut={ this.handleSignOut } /> */}
						</Row>
					}
			</Container>
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
