import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const fetchArticle = async (id, setArticle, setError, setLoading) => {
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=faa60fde91c7478898683916246b8bae`);
    const data = await response.json();
    if (data.articles && data.articles.length > id) {
      setArticle(data.articles[id]);
    } else {
      setError(true);
    }
  } catch {
    setError(true);
  } finally {
    setLoading(false);
  }
};

const NewsDetail = () => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetchArticle(id, setArticle, setError, setLoading);
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading article.</div>;
  if (!article) return <div>Article not found.</div>;

  return (
    <div className="news-detail">
      <div className="news-info">
        <p className="author">Author: {article.author || 'Unknown'}</p>
        <p className="source">Source: {article.source?.name}</p>
      </div>
      <div className="news-header">
        {article.urlToImage && (
          <img src={article.urlToImage} alt={article.title} className="news-image" />
        )}
        <h1 className="news-title">{article.title}</h1>
      </div>
      <p className="news-description">{article.description}</p>
    </div>
  );
};

export default NewsDetail;
