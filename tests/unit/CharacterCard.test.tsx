import React from 'react';

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, test, expect } from 'vitest';

import { CharacterCard } from '../../src/features/characters/components/CharacterCard';

describe('CharacterCard', () => {
  const mockCharacter = {
    id: 1,
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    origin: { name: 'Earth (C-137)' },
    location: { name: 'Earth (Replacement Dimension)' },
  };

  test('renders character card correctly', () => {
    render(
      <MemoryRouter>
        <CharacterCard character={mockCharacter} />
      </MemoryRouter>
    );

    // Check if the image is rendered correctly
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockCharacter.image);
    expect(image).toHaveAttribute('alt', mockCharacter.name);

    // Check if name is rendered
    expect(screen.getByText(mockCharacter.name)).toBeInTheDocument();

    // Check if link is correct
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', `/${mockCharacter.id}`);
  });

  test('handles minimal character data', () => {
    const minimalCharacter = {
      id: 2,
      name: 'Morty Smith',
      image: 'test.jpg',
    };

    render(
      <MemoryRouter>
        <CharacterCard character={minimalCharacter} />
      </MemoryRouter>
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(minimalCharacter.name)).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/2');
  });
});
