import { http, HttpResponse } from 'msw';

const API = 'https://rickandmortyapi.com/api';

export const charactersPage1 = {
  info: { count: 671, pages: 34, next: `${API}/character?page=2`, prev: null },
  results: [
    {
      id: 1,
      name: 'Rick Sanchez',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: { name: 'Earth (C-137)' },
      location: { name: 'Earth (Replacement Dimension)' },
      episode: ['S01E01', 'S01E02'],
    },
  ],
};

export const charactersPage2 = {
  info: { count: 671, pages: 34, next: null, prev: `${API}/character?page=1` },
  results: [
    {
      id: 2,
      name: 'Morty Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: { name: 'Earth (C-137)' },
      location: { name: 'Earth (Replacement Dimension)' },
      episode: ['S01E01'],
    },
  ],
};

export const handlers = [
  http.get(`${API}/character`, ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get('page') || '1';

    if (page === '1') {
      return HttpResponse.json(charactersPage1);
    }

    if (page === '2') {
      return HttpResponse.json(charactersPage2);
    }

    return HttpResponse.json({
      info: { count: 671, pages: 34, next: null, prev: null },
      results: [],
    });
  }),

  http.get(`${API}/character/:id`, ({ params }) => {
    const { id } = params;

    if (id === '1') {
      return HttpResponse.json({
        ...charactersPage1.results[0],
        id: 1,
      });
    }

    if (id === '2') {
      return HttpResponse.json({
        ...charactersPage2.results[0],
        id: 2,
      });
    }

    return HttpResponse.json({ error: 'Not found' }, { status: 404 });
  }),
];
