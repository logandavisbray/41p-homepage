import React from 'react';
import '../styles.css';

const Header = () => (
  <header>
    <div className="header-left">
      <div>DEV@Deakin</div>
      <input type="text" placeholder="Search..." />
    </div>
    <div>
      <a href="#">Post</a>
      <a href="#">Login</a>
    </div>
  </header>
);

export default Header;