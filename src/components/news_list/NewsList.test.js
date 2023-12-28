import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import NewsList from './NewsList';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

jest.mock('axios');

describe('NewsList Component Tests', () => {
  const mockArticles = [
    {
      title: 'Test Article 1',
      urlToImage: 'test1.jpg',
      author: 'Test Author 1',
      source: { name: 'Test Source 1' },
      publishedAt: '2023-01-01T00:00:00Z'
    },
    {
      title: 'Test Article 2',
      urlToImage: 'test2.jpg',
      author: 'Test Author 2',
      source: { name: 'Test Source 2' },
      publishedAt: '2023-01-02T00:00:00Z'
    }
  ];

  test('renders NewsList component', async () => {
    axios.get.mockResolvedValue({ data: { articles: [] } });
    render(
      <BrowserRouter>
        <NewsList />
      </BrowserRouter>
    );
    await waitFor(() => {
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
  });

  test('fetches and displays news', async () => {
    axios.get.mockResolvedValue({ data: { articles: mockArticles } });
    render(
      <BrowserRouter>
        <NewsList />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Test Article 1')).toBeInTheDocument();
      expect(screen.getByText('Test Article 2')).toBeInTheDocument();
    });
  });

  test('handles image error by removing news item', async () => {
    axios.get.mockResolvedValue({ data: { articles: mockArticles } });
    render(
      <BrowserRouter>
        <NewsList />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Test Article 1')).toBeInTheDocument();
    });

    const firstImage = screen.getAllByRole('img')[0];
    fireEvent.error(firstImage);
    await waitFor(() => {
      expect(screen.queryByText('Test Article 1')).not.toBeInTheDocument();
    });
  });
});
