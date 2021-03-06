import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderLoginStatus() {
    switch (this.props.auth) {
      case null:
        return; // could return loading animation
      case false:
        return(
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
      return(
        <li>
          <a>Logout</a>
      </li>
      );
    }
  }

  render() {
    return(
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">
            La Marquise de S
          </a>
          <ul className="right">
            {this.renderLoginStatus()}
          </ul>
        </div>
      </nav>
    );
  }
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
