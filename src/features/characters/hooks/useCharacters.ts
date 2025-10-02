import { useQuery } from '@tanstack/react-query';

import { getCharacters, getCharacterById } from '@/api/rickAndMorty';

export const useCharacters = (page: number) => {
  return useQuery({
    queryKey: ['characters', page],
    queryFn: () => getCharacters(page),
    keepPreviousData: true,
  });
};

export const useCharacter = (id: string | number) => {
  return useQuery({
    queryKey: ['character', id],
    queryFn: () => getCharacterById(id),
  });
};
