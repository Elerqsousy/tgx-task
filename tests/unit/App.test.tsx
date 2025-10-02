import React from 'react';

import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';

import App from '../../src/App';

describe('App', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(document.querySelector('.h-screen')).toBeInTheDocument();
  });

  test('renders breadcrumb navigation', () => {
    render(<App />);
    // Back button is always present in breadcrumb
    expect(screen.getByRole('button', { name: /back/i })).toBeInTheDocument();
  });
});
