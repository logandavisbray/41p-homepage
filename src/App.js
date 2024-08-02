import React from 'react';
import Header from './reactfiles/Header';
import Articles from './reactfiles/Articles';
import Tutorials from './reactfiles/Tutorials';
import Subscribe from './reactfiles/Subscribe';
import Footer from './reactfiles/Footer';
import './styles.css';
import headerImage from './images/header.jpg';

const App = () => (
  <div>
    <Header />
    <main>
      <div className="headerimg">
      <img src={headerImage} alt='Header'/>
      </div>
      <Articles />
      <Tutorials />
    </main>
    <Subscribe/>
    <Footer />
  </div>
);

export default App;