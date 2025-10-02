import React from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, test, expect } from 'vitest';

import userEvent from '@testing-library/user-event';

import Home from '../../src/routes/Home';
import { createQueryClientWrapper } from '../utils/createQueryClientWrapper';

describe('HomePage', () => {
  test('shows loading state initially', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
      { wrapper: createQueryClientWrapper() }
    );

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('renders page 1 data and handles pagination', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
      { wrapper: createQueryClientWrapper() }
    );

    // Initial loading state
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    // Wait for data to load
    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    });

    // Test pagination buttons
    const nextButton = screen.getByRole('button', { name: /next/i });
    await user.click(nextButton);

    // Wait for page 2 data
    await waitFor(() => {
      expect(screen.getByText('Morty Smith')).toBeInTheDocument();
    });

    const prevButton = screen.getByRole('button', { name: /prev/i });
    await user.click(prevButton);

    // Wait for page 1 data again
    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    });
  });

  test('character cards link to detail pages', async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
      { wrapper: createQueryClientWrapper() }
    );

    await waitFor(() => {
      const links = screen.getAllByRole('link');
      expect(links[0]).toHaveAttribute('href', '/1');
    });
  });
});
