import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import NewsDetail from './NewsDetail';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

jest.mock('axios');

describe('NewsDetail Component Tests', () => {
  const mockArticle = {
    title: 'Test Title',
    author: 'Test Author',
    source: { name: 'Test Source' },
    publishedAt: '2023-01-01T00:00:00Z',
    content: 'Test Content',
    urlToImage: 'test-image.jpg'
  };

  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: {
        articles: [mockArticle]
      }
    });
  });

  test('displays article details in NewsDetail', async () => {
    render(
      <BrowserRouter>
        <NewsDetail />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Test Title')).toBeInTheDocument();
      expect(screen.getByText('Author: Test Author')).toBeInTheDocument();
      expect(screen.getByText('Source: Test Source')).toBeInTheDocument();
      expect(screen.getByText('Test Content')).toBeInTheDocument();
    });
  });

  test('displays loading message when data is not available', async () => {
    axios.get.mockResolvedValueOnce({ data: { articles: [] } });
    render(
      <BrowserRouter>
        <NewsDetail />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
  });

  test('displays error message for missing article data', async () => {
    axios.get.mockRejectedValueOnce(new Error());
    render(
      <BrowserRouter>
        <NewsDetail />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Error loading article.')).toBeInTheDocument();
    });
  });
});
