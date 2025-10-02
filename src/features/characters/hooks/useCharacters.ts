import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { getCharacters, getCharacterById } from '@/api/rickAndMorty';
import { Character } from '@/api/rickAndMortyTypes';

export const useCharacters = (page: number) => {
  return useQuery({
    queryKey: ['characters', page],
    queryFn: () => getCharacters(page),
    keepPreviousData: true,
  });
};

export const useCharacter = (
  id: string | number,
  options?: UseQueryOptions<Character>
) => {
  return useQuery({
    queryKey: ['character', id],
    queryFn: () => getCharacterById(id),
    ...options,
  });
};
