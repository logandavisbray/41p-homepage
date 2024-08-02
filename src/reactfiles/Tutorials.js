import React from 'react';
import '../styles.css';
import tutorial1img from '../images/tutorial1.jpg';
import tutorial2img from '../images/tutorial2.jpg';
import tutorial3img from '../images/tutorial3.jpg';

const tutorials = [
  { id: 1, title: "Tutorial 1", description: "JS6", author: "Author 1", rating: 5, image: 'tutorial1.jpg' },
  { id: 2, title: "Tutorial 2", description: "React Router", author: "Author 2", rating: 5, image: 'tutorial2.jpg' },
  { id: 3, title: "Tutorial 3", description: "Express", author: "Author 3", rating: 4.9, image: 'tutorial3.jpg' },
];

const imageMap = {
  'tutorial1.jpg': tutorial1img,
  'tutorial2.jpg': tutorial2img,
  'tutorial3.jpg': tutorial3img,
};

const Tutorials = () => (
  <div className="featured">
    <h2>Featured Tutorials</h2>
    <div className="featured-objects">
      {tutorials.map(tutorial => (
        <div className="object" key={tutorial.id}>
          <img src={imageMap[tutorial.image]} alt={tutorial.title} />
          <h3>{tutorial.title}</h3>
          <p>{tutorial.description}</p>
          <div className="rating">
            <span role="img" aria-label="star">⭐</span>{tutorial.rating} {tutorial.author}
          </div>
        </div>
      ))}
    </div>
    <button className="button">See More Tutorials</button>
  </div>
);

export default Tutorials;
