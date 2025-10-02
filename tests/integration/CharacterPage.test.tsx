import React from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, test, expect } from 'vitest';

import userEvent from '@testing-library/user-event';

import Character from '../../src/routes/Character';
import { createQueryClientWrapper } from '../utils/createQueryClientWrapper';

describe('CharacterPage', () => {
  test('shows loading state initially', () => {
    render(
      <MemoryRouter initialEntries={['/1']}>
        <Routes>
          <Route path="/:id" element={<Character />} />
        </Routes>
      </MemoryRouter>,
      { wrapper: createQueryClientWrapper() }
    );

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('renders character details correctly', async () => {
    render(
      <MemoryRouter initialEntries={['/1']}>
        <Routes>
          <Route path="/:id" element={<Character />} />
        </Routes>
      </MemoryRouter>,
      { wrapper: createQueryClientWrapper() }
    );

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    });

    // Verify character details
    expect(screen.getByText('Origin:')).toBeInTheDocument();
    expect(screen.getByText('Earth (C-137)')).toBeInTheDocument();
    expect(screen.getByText('Last location:')).toBeInTheDocument();
    expect(
      screen.getByText('Earth (Replacement Dimension)')
    ).toBeInTheDocument();
    expect(screen.getByText('Episodes:')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  test('renders character details for different character', async () => {
    render(
      <MemoryRouter initialEntries={['/2']}>
        <Routes>
          <Route path="/:id" element={<Character />} />
        </Routes>
      </MemoryRouter>,
      { wrapper: createQueryClientWrapper() }
    );

    await waitFor(() => {
      expect(screen.getByText('Morty Smith')).toBeInTheDocument();
    });

    expect(screen.getByText('Episodes:')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('has working navigation breadcrumb', async () => {
    render(
      <MemoryRouter initialEntries={['/1']}>
        <Routes>
          <Route path="/:id" element={<Character />} />
        </Routes>
      </MemoryRouter>,
      { wrapper: createQueryClientWrapper() }
    );

    await waitFor(() => {
      const homeLink = screen.getByRole('link', { name: /home/i });
      expect(homeLink).toHaveAttribute('href', '/');
    });
  });

  test('navigation works correctly', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={['/1']}>
        <Routes>
          <Route path="/:id" element={<Character />} />
        </Routes>
      </MemoryRouter>,
      { wrapper: createQueryClientWrapper() }
    );

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    });

    // Test back button navigation
    const backButton = screen.getByRole('button', { name: /back/i });
    expect(backButton).toBeInTheDocument();
    expect(backButton).not.toBeDisabled();
    await user.click(backButton);
  });

  test('breadcrumb shows correct navigation path', async () => {
    render(
      <MemoryRouter initialEntries={['/1']}>
        <Routes>
          <Route path="/:id" element={<Character />} />
        </Routes>
      </MemoryRouter>,
      { wrapper: createQueryClientWrapper() }
    );

    await waitFor(() => {
      expect(screen.getByText('1')).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute(
        'href',
        '/'
      );
    });
  });
});
