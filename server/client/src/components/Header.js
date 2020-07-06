import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				// Still deciding
				return;
			case false:
				// I'm logout
				return (
					<li>
						<a href="/auth/google">Loging With Google</a>
					</li>
				);
			default:
				// I'm loging
				return (
					<li>
						<a href="/api/logout">Logout</a>
					</li>
				);
		}
	}

	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<a className="left brand-logo">Emaily</a>
					<ul className="right">{this.renderContent()}</ul>
				</div>
			</nav>
		);
	}
}

// function mapStateToProps(state) {
//   return { auth: state.auth };
// }
function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
