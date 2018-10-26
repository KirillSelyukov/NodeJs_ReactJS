import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            Emaily
          </a>
          <ul id="nav-mobile" className="right">
            <li>
              <a href="">Login with google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
