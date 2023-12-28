import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const fetchNews = async (setNews, setLoadedImages) => {
  const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=faa60fde91c7478898683916246b8bae');
  const data = await response.json();
  setNews(data.articles);
  const initialLoadedImages = data.articles.reduce((acc, article, index) => {
    acc[index] = !!article.urlToImage;
    return acc;
  }, {});
  setLoadedImages(initialLoadedImages);
};

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    fetchNews(setNews, setLoadedImages);
  }, []);

  const handleImageError = (index) => {
    setLoadedImages(prev => ({ ...prev, [index]: false }));
  };

  return (
    <div className="news-grid">
      {news.map((article, index) => (
        loadedImages[index] && (
          <div key={index} className="news-item">
            <div className="news-info">
                <p className="author">Author: {article.author || 'Unknown'}</p>
                <p className="source">Source: {article.source.name}</p>
            </div>
            <Link to={`/news/${index}`}>
              {article.urlToImage && (
                <img 
                  src={article.urlToImage} 
                  alt={article.title} 
                  onError={() => handleImageError(index)}
                />
              )}
              <h3>{article.title}</h3>
              <p className="date">Published at: {new Date(article.publishedAt).toLocaleDateString()}</p>
            </Link>
          </div>
        )
      ))}
    </div>
  );
};

export default NewsList;
