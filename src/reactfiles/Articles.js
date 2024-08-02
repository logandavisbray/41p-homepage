import React from 'react';
import '../styles.css';
import article1img from '../images/article1.jpg';
import article2img from '../images/article2.jpg';
import article3img from '../images/article3.jpg';

const articles = [
  { id: 1, title: "Article 1", description: "React OR Vue", author: "Author 1", rating: 5, image: 'article1.jpg' },
  { id: 2, title: "Article 2", description: "NodeJS", author: "Author 2", rating: 5, image: 'article2.jpg' },
  { id: 3, title: "Article 3", description: "React Hooks", author: "Author 3", rating: 5, image: 'article3.jpg' },
];

const imageMap = {
  'article1.jpg': article1img,
  'article2.jpg': article2img,
  'article3.jpg': article3img,
};

const Articles = () => (
  <div className="featured">
    <h2>Featured Articles</h2>
    <div className="featured-objects">
      {articles.map(article => (
        <div className="object" key={article.id}>
          <img src={imageMap[article.image]} alt={article.title} />
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <div className="rating">
            <span role="img" aria-label="star">⭐</span>{article.rating} {article.author}
          </div>
        </div>
      ))}
    </div>
    <button className="button">See More Articles</button>
  </div>
);

export default Articles;
