import React from 'react';

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, test, expect } from 'vitest';

import AppRoutes from '../../src/routes';
import { createQueryClientWrapper } from '../utils/createQueryClientWrapper';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const QueryWrapper = createQueryClientWrapper();
  return (
    <QueryWrapper>
      <MemoryRouter>{children}</MemoryRouter>
    </QueryWrapper>
  );
};

describe('AppRoutes', () => {
  test('renders home page by default', () => {
    render(<AppRoutes />, { wrapper: Wrapper });
    expect(screen.getByText(/Rick & Morty Characters/i)).toBeInTheDocument();
  });

  test('renders character page for character route', () => {
    render(
      <MemoryRouter initialEntries={['/1']}>
        <AppRoutes />
      </MemoryRouter>,
      { wrapper: createQueryClientWrapper() }
    );
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
