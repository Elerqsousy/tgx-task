import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = async (page: number) => {
  const { data } = await axios.get(`${API_URL}/character?page=${page}`);
  return data;
};

export const getCharacterById = async (id: string | number) => {
  const { data } = await axios.get(`${API_URL}/character/${id}`);
  return data;
};
