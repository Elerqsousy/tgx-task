import React from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import { describe, test, expect } from 'vitest';

import { useCharacters } from '../../src/features/characters/hooks/useCharacters';
import { createQueryClientWrapper } from '../utils/createQueryClientWrapper';

function TestComponent({ page = 1 }: { page?: number }) {
  const { data, isLoading, isError } = useCharacters(page);

  if (isLoading) return <div>loading</div>;
  if (isError) return <div>error</div>;
  if (!data) return null;

  return (
    <div>
      <div data-testid="first">{data.results[0].name}</div>
      <div data-testid="total">{data.info.count}</div>
    </div>
  );
}

describe('useCharacters', () => {
  test('shows loading state initially', () => {
    render(<TestComponent />, { wrapper: createQueryClientWrapper() });
    expect(screen.getByText('loading')).toBeInTheDocument();
  });

  test('returns results for page 1', async () => {
    render(<TestComponent />, { wrapper: createQueryClientWrapper() });

    await waitFor(() => {
      expect(screen.queryByText('loading')).not.toBeInTheDocument();
    });

    expect(screen.getByTestId('first')).toHaveTextContent('Rick Sanchez');
    expect(screen.getByTestId('total')).toHaveTextContent('671');
  });

  test('returns results for page 2', async () => {
    render(<TestComponent page={2} />, { wrapper: createQueryClientWrapper() });

    await waitFor(() => {
      expect(screen.queryByText('loading')).not.toBeInTheDocument();
    });

    expect(screen.getByTestId('first')).toHaveTextContent('Morty Smith');
  });
});
