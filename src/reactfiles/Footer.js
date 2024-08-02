import React from 'react';
import '../styles.css';
import facebookLogo from '../images/facebook_icon.jpg';
import instagramLogo from '../images/instagram_icon.jpg';
import twitterLogo from '../images/twitter_icon.jpg';

const Footer = () => (
  <footer>
    <div className="footer">
      <div id='container'>
        <div>
          <h3>Explore</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Questions</a></li>
            <li><a href="#">Articles</a></li>
            <li><a href="#">Tutorials</a></li>
          </ul>
        </div>
        <div>
          <h3>Support</h3>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3>Stay Connected</h3>
          <img className="media_icon" src={facebookLogo} alt='Facebook' />
          <img className="media_icon" src={instagramLogo} alt='Facebook' />
          <img className="media_icon" src={twitterLogo} alt='Facebook' />
        </div>
      </div>
      <p>DEV@Deakin 2022</p>
      <div>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms</a>
        <a href="#">Code of Conduct</a>
      </div>
    </div>
  </footer>
);

export default Footer;