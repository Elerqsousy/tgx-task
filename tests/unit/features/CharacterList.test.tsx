import React from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, test, expect, vi } from 'vitest';

import { CharacterList } from '../../../src/features/characters/components/CharacterList';
import * as hooks from '../../../src/features/characters/hooks/useCharacters';
import { charactersPage1 } from '../../handlers/characters';
import { createQueryClientWrapper } from '../../utils/createQueryClientWrapper';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const QueryWrapper = createQueryClientWrapper();
  return (
    <QueryWrapper>
      <MemoryRouter>{children}</MemoryRouter>
    </QueryWrapper>
  );
};

describe('CharacterList', () => {
  test('displays loading state', () => {
    vi.spyOn(hooks, 'useCharacters').mockReturnValue({
      data: undefined,
      isLoading: true,
      isError: false,
    } as any);

    render(<CharacterList />, { wrapper: Wrapper });
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays error state', () => {
    vi.spyOn(hooks, 'useCharacters').mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: true,
    } as any);

    render(<CharacterList />, { wrapper: Wrapper });
    expect(screen.getByText(/error loading characters/i)).toBeInTheDocument();
  });

  test('displays character list', async () => {
    vi.spyOn(hooks, 'useCharacters').mockReturnValue({
      data: charactersPage1,
      isLoading: false,
      isError: false,
    } as any);

    render(<CharacterList />, { wrapper: Wrapper });

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    });
  });

  test('handles pagination correctly', async () => {
    const mockSetPage = vi.fn();
    vi.spyOn(React, 'useState').mockReturnValue([1, mockSetPage]);
    vi.spyOn(hooks, 'useCharacters').mockReturnValue({
      data: charactersPage1,
      isLoading: false,
      isError: false,
    } as any);

    render(<CharacterList />, { wrapper: Wrapper });

    const nextButton = screen.getByRole('button', { name: /next/i });
    const prevButton = screen.getByRole('button', { name: /prev/i });

    expect(prevButton).toBeDisabled();
    expect(nextButton).not.toBeDisabled();
  });
});
