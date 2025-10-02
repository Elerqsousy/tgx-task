import axios from 'axios';

import { CharacterList, Character } from './rickAndMortyTypes';

const API_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = async (page: number): Promise<CharacterList> => {
  const { data } = await axios.get(`${API_URL}/character?page=${page}`);
  return data;
};

export const getCharacterById = async (
  id: string | number
): Promise<Character> => {
  const { data } = await axios.get(`${API_URL}/character/${id}`);
  return data;
};
